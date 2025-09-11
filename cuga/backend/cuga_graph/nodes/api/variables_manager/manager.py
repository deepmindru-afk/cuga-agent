import json
from typing import Any, Dict, Optional
from datetime import datetime


class VariableMetadata:
    def __init__(self, value: Any, description: Optional[str] = None, created_at: Optional[datetime] = None):
        self.value = value
        self.description = description or ""
        self.type = type(value).__name__
        self.created_at = created_at if created_at is not None else datetime.now()
        self.count_items = self._calculate_count(value)

    def _calculate_count(self, value: Any) -> int:
        """Calculate the count of items in the value based on its type."""
        if isinstance(value, (list, tuple, set)):
            return len(value)
        elif isinstance(value, dict):
            return len(value)
        elif isinstance(value, str):
            return len(value)
        elif hasattr(value, '__len__'):
            try:
                return len(value)
            except Exception:
                return 1
        else:
            return 1

    def to_dict(self) -> Dict[str, Any]:
        """Convert metadata to dictionary representation."""
        return {
            "value": self.value,
            "description": self.description,
            "type": self.type,
            "created_at": self.created_at.isoformat(),
            "count_items": self.count_items,
        }


class VariablesManager(object):
    _instance = None
    variables: Dict[str, VariableMetadata] = {}
    variable_counter: int = 0
    _creation_order: list = []  # Track creation order

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super(VariablesManager, cls).__new__(cls)
        return cls._instance

    def add_variable(self, value: Any, name: Optional[str] = None, description: Optional[str] = None) -> str:
        """
        Add a new variable with an optional name or auto-generated name and description.

        Args:
            value (Any): The value to store
            name (Optional[str]): Optional custom name, if None will auto-generate
            description (Optional[str]): Optional description of the variable

        Returns:
            str: The name of the variable that was created
        """
        if name is None:
            self.variable_counter += 1
            name = f"variable_{self.variable_counter}"
        else:
            # If a custom name is provided and it's a 'variable_X' format,
            # update the counter to avoid future collisions.
            if name.startswith("variable_") and name[9:].isdigit():
                num = int(name[9:])
                if num >= self.variable_counter:
                    self.variable_counter = num

        self.variables[name] = VariableMetadata(value, description)

        # Track creation order
        if name not in self._creation_order:
            self._creation_order.append(name)

        return name

    def get_variable(self, name: str) -> Any:
        """
        Get a variable value by name.

        Args:
            name (str): The name of the variable

        Returns:
            Any: The value of the variable, or None if not found
        """
        metadata = self.variables.get(name)
        return metadata.value if metadata else None

    def get_variable_metadata(self, name: str) -> Optional[VariableMetadata]:
        """
        Get complete metadata for a variable by name.

        Args:
            name (str): The name of the variable

        Returns:
            Optional[VariableMetadata]: The metadata of the variable, or None if not found
        """
        return self.variables.get(name)

    def get_all_variables_metadata(self) -> Dict[str, Dict[str, Any]]:
        """
        Get metadata for all variables including description, type, and item count.

        Returns:
            Dict[str, Dict[str, Any]]: Dictionary with variable names as keys and metadata as values
        """
        return {name: metadata.to_dict() for name, metadata in self.variables.items()}

    def get_variables_summary(
        self, variable_names: list[str] = None, last_n: Optional[int] = None, max_length: Optional[int] = 5000
    ) -> str:
        """
        Get a formatted summary of variables with their metadata.

        Args:
            variable_names: Optional list of variable names to include in summary.
                           If None, all variables are included.
            last_n: Optional number of last created variables to include in summary.
                    If provided, overrides variable_names parameter.
            max_length: max preview length

        Returns:
            str: Formatted string with variable summaries
        """
        if not self.variables:
            return "# No variables stored"

        # Determine which variables to include
        if last_n is not None:
            # Get the last n variables based on creation order
            if last_n <= 0:
                return "# Invalid last_n value: must be greater than 0"

            # Get the last n variable names from creation order
            last_n_names = (
                self._creation_order[-last_n:]
                if len(self._creation_order) >= last_n
                else self._creation_order[:]
            )
            filtered_variables = {
                name: metadata for name, metadata in self.variables.items() if name in last_n_names
            }

            # Sort by creation order to maintain chronological order
            sorted_vars = [
                (name, filtered_variables[name]) for name in last_n_names if name in filtered_variables
            ]

        elif variable_names is not None:
            filtered_variables = {
                name: metadata for name, metadata in self.variables.items() if name in variable_names
            }

            # Check if any requested variables were not found
            missing_vars = set(variable_names) - set(filtered_variables.keys())
            if missing_vars:
                # You might want to handle this differently based on your needs
                pass  # Could log warning or raise exception

            # Sort by creation order for consistency
            sorted_vars = [
                (name, filtered_variables[name])
                for name in self._creation_order
                if name in filtered_variables
            ]
        else:
            # Use creation order for all variables
            sorted_vars = [
                (name, self.variables[name]) for name in self._creation_order if name in self.variables
            ]

        if not sorted_vars:
            return "# No matching variables found"

        # Build summary with appropriate header
        if last_n is not None:
            actual_count = len(sorted_vars)
            if actual_count < last_n:
                summary_lines = [
                    f"# Last {actual_count} Variables Summary (only {actual_count} variables exist)",
                    "",
                ]
            else:
                summary_lines = [f"# Last {last_n} Variables Summary", ""]
        else:
            summary_lines = ["# Variables Summary", ""]

        for name, metadata in sorted_vars:
            lines = [
                f"## {name}",
                f"- Type: {metadata.type}",
                f"- Items: {metadata.count_items}",
                f"- Description: {metadata.description or 'No description'}",
                f"- Created: {metadata.created_at.strftime('%Y-%m-%d %H:%M:%S')}",
                f"- Value Preview: {self._get_value_preview(metadata.value, max_length=max_length)}",
                "",
            ]
            summary_lines.extend(lines)

        return '\n'.join(summary_lines)

    def _get_value_preview(self, value: Any, max_length: int = 5000) -> str:
        """Get a preview of the value, truncated if too long."""
        if isinstance(value, str):
            preview = repr(value)
        elif isinstance(value, (list, dict)):
            # Use repr for Python-valid representation
            preview = repr(value)
        else:
            preview = repr(value)

        if len(preview) > max_length:
            return preview[:max_length] + "..."
        return preview

    def get_variables_formatted(self) -> str:
        """
        Get all variables formatted as key-value strings in valid Python syntax.

        Returns:
            str: Formatted string with all variables
        """
        if not self.variables:
            return "# No variables stored"

        formatted_lines = []
        for name, metadata in self.variables.items():
            value = metadata.value
            # Use repr() for all values to ensure valid Python syntax
            formatted_lines.append(f'{name} = {repr(value)}')

        return '\n'.join(formatted_lines)

    def get_variables_as_json(self) -> str:
        """
        Get all variables formatted as JSON strings.

        Returns:
            str: Formatted string with all variables in JSON format
        """
        if not self.variables:
            return "# No variables stored"

        formatted_lines = []
        for name, metadata in self.variables.items():
            value = metadata.value
            try:
                json_value = json.dumps(value, indent=2)
                formatted_lines.append(f'{name} = {json_value}')
            except (TypeError, ValueError):
                # Fallback for non-JSON-serializable values
                formatted_lines.append(f'{name} = {repr(value)}')

        return '\n'.join(formatted_lines)

    def get_last_variable(self) -> tuple[str, VariableMetadata]:
        """
        Get the last added variable.

        Returns:
            tuple[str, Any]: Tuple of (name, value) of the last variable, or (None, None) if empty
        """
        if not self.variables:
            return None, None

        # Get the last key from creation order
        last_key = self._creation_order[-1] if self._creation_order else None
        if last_key and last_key in self.variables:
            return last_key, self.variables[last_key]
        return None, None

    def present_variable(self, variable_name):
        """
        Presents a given Python variable in a structured format:
        - Markdown table for a list of dictionaries if suitable.
        - JSON format for dictionaries, lists (non-dict lists), and other complex objects.
        - String representation for basic types.

        Args:
            variable_name: The Python variable (any type) to be presented.

        Returns:
            A string representing the data in Markdown or JSON format.
        """
        data = self.variables.get(variable_name).value

        # --- Helper function for Markdown table ---
        def _create_markdown_table(list_of_dicts):
            if not list_of_dicts:
                return "No data to display in table format (empty list)."

            # Collect all unique keys from all dictionaries for the header
            all_keys = set()
            for item in list_of_dicts:
                if not isinstance(item, dict):
                    # If not all items are dictionaries, a table is not suitable
                    return None
                all_keys.update(item.keys())

            # Sort keys for consistent column order
            headers = sorted(list(all_keys))

            if not headers:
                return "No data to display in table format (dictionaries have no keys)."

            # Calculate maximum column widths
            column_widths = {header: len(header) for header in headers}

            for item in list_of_dicts:
                for key in headers:
                    value = item.get(key, "")
                    # Convert complex types to JSON string for length calculation
                    if isinstance(value, (dict, list)):
                        cell_content = json.dumps(value)
                    else:
                        cell_content = str(value)
                    column_widths[key] = max(column_widths[key], len(cell_content))

            # Build the table
            table_str = ""

            # Header row
            header_row = [header.ljust(column_widths[header]) for header in headers]
            table_str += "| " + " | ".join(header_row) + " |\n"

            # Separator row
            separator_row = ["-" * column_widths[header] for header in headers]
            table_str += "| " + " | ".join(separator_row) + " |\n"

            # Data rows
            for item in list_of_dicts:
                row_values = []
                for key in headers:
                    value = item.get(key, "")  # Use empty string if key is missing
                    # Ensure values are simple strings for table display, serialize nested
                    if isinstance(value, (dict, list)):
                        cell_content = json.dumps(value)  # Serialize nested structures to JSON
                    else:
                        cell_content = str(value)
                    row_values.append(cell_content.ljust(column_widths[key]))
                table_str += "| " + " | ".join(row_values) + " |\n"

            return table_str

        # --- Main presentation logic ---

        if isinstance(data, list) and all(isinstance(item, dict) for item in data):
            # Try to create a Markdown table for list of dictionaries
            markdown_table = _create_markdown_table(data)
            if markdown_table:
                return "\n\n```\n" + markdown_table + "\n```\n\n"
            else:
                # Fallback to JSON if table creation failed (e.g., mixed types in list)
                try:
                    return "\n\n```json\n" + json.dumps(data, indent=4) + "\n```\n\n"
                except TypeError:
                    return f"Could not serialize list to JSON: {data}"
        elif isinstance(data, (dict, list)):
            # For general dictionaries and lists (not exclusively list of dicts for table)
            try:
                return "\n\n```json\n" + json.dumps(data, indent=4) + "\n```\n\n"
            except TypeError:
                return f"Could not serialize object to JSON: {data}"
        else:
            # For basic types and other non-serializable objects, return string representation
            return str(data)

    def get_last_variable_metadata(self) -> tuple[str, VariableMetadata]:
        """
        Get the last added variable with its complete metadata.

        Returns:
            tuple[str, VariableMetadata]: Tuple of (name, metadata) of the last variable, or (None, None) if empty
        """
        if not self.variables:
            return None, None

        last_key = self._creation_order[-1] if self._creation_order else None
        if last_key and last_key in self.variables:
            return last_key, self.variables[last_key]
        return None, None

    def get_variable_names(self) -> list[str]:
        """
        Get all variable names.

        Returns:
            list[str]: List of all variable names
        """
        return list(self.variables.keys())

    def get_last_n_variable_names(self, n: int) -> list[str]:
        """
        Get the names of the last n created variables.

        Args:
            n (int): Number of last variables to get

        Returns:
            list[str]: List of variable names in creation order
        """
        if n <= 0:
            return []
        return self._creation_order[-n:] if len(self._creation_order) >= n else self._creation_order[:]

    def remove_variable(self, name: str) -> bool:
        """
        Remove a variable by name.

        Args:
            name (str): The name of the variable to remove

        Returns:
            bool: True if variable was removed, False if not found
        """
        if name in self.variables:
            del self.variables[name]
            # Also remove from creation order
            if name in self._creation_order:
                self._creation_order.remove(name)
            return True
        return False

    def update_variable_description(self, name: str, description: str) -> bool:
        """
        Update the description of an existing variable.

        Args:
            name (str): The name of the variable
            description (str): New description

        Returns:
            bool: True if variable was updated, False if not found
        """
        if name in self.variables:
            self.variables[name].description = description
            return True
        return False

    def get_variables_by_type(self, type_name: str) -> Dict[str, Any]:
        """
        Get all variables of a specific type.

        Args:
            type_name (str): The type name to filter by (e.g., 'str', 'list', 'dict')

        Returns:
            Dict[str, Any]: Dictionary of variables matching the type
        """
        return {
            name: metadata.value for name, metadata in self.variables.items() if metadata.type == type_name
        }

    def replace_variables_placeholders(self, text: str):
        for variable_name in self.get_last_n_variable_names(5):
            relevant_key = "{" + variable_name + "}"
            if relevant_key in text:
                text = text.replace(relevant_key, self.present_variable(variable_name))
        return text

    def reset(self) -> None:
        """
        Reset the variables manager, clearing all variables and counter.
        """
        self.variables = {}
        self.variable_counter = 0
        self._creation_order = []

    def reset_keep_last_n(self, n: int) -> None:
        """
        Reset the variables manager, keeping only the last 'n' added variables.

        Args:
            n (int): The number of last added variables to keep.
        """
        if n < 0:
            print("Warning: 'n' cannot be negative. No variables will be kept.")
            return

        variables_to_keep = {}
        original_creation_order = []
        max_variable_counter = 0

        # Identify the last 'n' variables and their metadata
        names_to_keep = self._creation_order[-n:]

        for name in names_to_keep:
            if name in self.variables:
                variables_to_keep[name] = self.variables[name]
                original_creation_order.append(name)
                # Update max_variable_counter if the kept variable name is auto-generated
                if name.startswith("variable_") and name[9:].isdigit():
                    max_variable_counter = max(max_variable_counter, int(name[9:]))

        # Perform the reset
        self.reset()

        # Re-add the identified variables
        for name in original_creation_order:
            metadata = variables_to_keep[name]
            self.variables[name] = VariableMetadata(
                metadata.value, description=metadata.description, created_at=metadata.created_at
            )
            self._creation_order.append(name)

        # Set the variable counter to ensure future auto-generated names don't conflict
        self.variable_counter = max_variable_counter

    def get_variable_count(self) -> int:
        """
        Get the total number of variables stored.

        Returns:
            int: Number of variables
        """
        return len(self.variables)

    def __str__(self) -> str:
        """String representation of the variables manager."""
        return f"VariablesManager(count={self.get_variable_count()})"

    def __repr__(self) -> str:
        """Detailed representation of the variables manager."""
        return f"VariablesManager(variables={self.variables}, counter={self.variable_counter})"


# Example usage:
if __name__ == "__main__":
    # Test the singleton pattern
    vm1 = VariablesManager()
    vm2 = VariablesManager()

    print(f"Same instance: {vm1 is vm2}")  # Should be True

    # Add variables with descriptions, including booleans in different contexts
    var1_name = vm1.add_variable("Hello World", description="A simple greeting message")
    var2_name = vm1.add_variable([1, 2, 3, 4, True, False], description="List with booleans")
    var3_name = vm1.add_variable(
        {"key": "value", "active": True, "disabled": False}, "custom_var", "Dict with booleans"
    )
    var4_name = vm1.add_variable(True, description="A standalone boolean")
    var5_name = vm1.add_variable(
        {"nested": {"flag": True, "items": [False, True]}}, description="Nested structure with booleans"
    )
    var6_name = vm1.add_variable(123, description="An integer variable")
    var7_name = vm1.add_variable(3.14, description="A float variable")

    print(
        f"Added variables: {var1_name}, {var2_name}, {var3_name}, {var4_name}, {var5_name}, {var6_name}, {var7_name}"
    )
    print(f"Current variable count: {vm1.get_variable_count()}")
    print("\n" + "=" * 50)
    print("ALL VARIABLES SUMMARY BEFORE RESET")
    print("=" * 50)
    print(vm1.get_variables_summary())

    # Test the new last_n functionality
    print("\n" + "=" * 50)
    print("TESTING LAST N VARIABLES FUNCTIONALITY")
    print("=" * 50)

    # Get summary of last 3 variables
    print("\nLast 3 variables summary:")
    print(vm1.get_variables_summary(last_n=3))

    # Get summary of last 2 variables
    print("\nLast 2 variables summary:")
    print(vm1.get_variables_summary(last_n=2))

    # Test edge case: more variables requested than exist
    print("\nLast 10 variables summary (more than exist):")
    print(vm1.get_variables_summary(last_n=10))

    # Test edge case: invalid last_n
    print("\nInvalid last_n (0):")
    print(vm1.get_variables_summary(last_n=0))

    # Get names of last 3 variables
    print(f"\nNames of last 3 variables: {vm1.get_last_n_variable_names(3)}")

    # Get formatted variables (Python-valid format)
    print("\nFormatted variables (Python format):")
    print(vm1.get_variables_formatted())

    # Get variables as JSON
    print("\nVariables in JSON format:")
    print(vm1.get_variables_as_json())

    # Get variables summary with metadata (all variables)
    print("\nAll variables summary with metadata:")
    print(vm1.get_variables_summary())

    # Test specific boolean handling
    print("\nTesting boolean values:")
    print(f"Standalone bool: {vm1.get_variable(var4_name)}")
    print(f"Bool in list: {vm1.get_variable(var2_name)}")
    print(f"Bool in dict: {vm1.get_variable(var3_name)}")

    print("\n" + "=" * 50)
    print("TESTING reset_keep_last_n FUNCTIONALITY")
    print("=" * 50)

    print(f"\nBefore reset_keep_last_n - variable count: {vm1.get_variable_count()}")
    print("Variables before reset_keep_last_n:")
    print(vm1.get_variables_summary())

    # Keep the last 3 variables
    vm1.reset_keep_last_n(3)
    print(f"\nAfter reset_keep_last_n(3) - variable count: {vm1.get_variable_count()}")
    print("Variables after keeping last 3:")
    print(vm1.get_variables_summary())
    print(f"Creation order after keeping last 3: {vm1._creation_order}")

    # Add new variables to see if auto-generation works correctly
    new_var1 = vm1.add_variable("new_value_1", description="A new variable after reset")
    new_var2 = vm1.add_variable("new_value_2", description="Another new variable")
    print(f"\nAdded new variables: {new_var1}, {new_var2}")
    print(f"Current variable count: {vm1.get_variable_count()}")
    print("Variables after adding new ones:")
    print(vm1.get_variables_summary())
    print(f"Creation order after adding new ones: {vm1._creation_order}")

    # Test keeping 0 variables
    vm1.reset()  # Reset to a full state first
    vm1.add_variable("a")
    vm1.add_variable("b")
    vm1.add_variable("c")
    print(f"\nBefore reset_keep_last_n(0) - variable count: {vm1.get_variable_count()}")
    vm1.reset_keep_last_n(0)
    print(f"After reset_keep_last_n(0) - variable count: {vm1.get_variable_count()}")
    print(vm1.get_variables_summary())
    print(f"Creation order after keeping 0: {vm1._creation_order}")

    # Reset for clean state
    vm1.reset()
    print(f"\nAfter final reset - variable count: {vm1.get_variable_count()}")
