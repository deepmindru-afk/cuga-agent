interface Step {
  title: string;
  content: string;
}

interface ExpandedSteps {
  [key: number]: boolean;
}

interface ProgressStepsState {
  steps: Step[];
  expandedSteps: ExpandedSteps;
}

interface ProgressStepsMethods {
  addStep: (title: string, content: string) => void;
  getSteps: () => Step[];
  getExpandedSteps: () => ExpandedSteps;
}

type OnStepChangeCallback = (state: ProgressStepsState) => void;

function createProgressSteps(
  initialSteps: Step[] = [],
  onStepChange: OnStepChangeCallback | null = null
): string {
  // Initialize steps
  const steps: Step[] =
    initialSteps.length > 0
      ? initialSteps
      : [
          { title: "Step 1", content: "This is step 1 content." },
          { title: "Step 2", content: "This is step 2 content." },
          { title: "Step 3", content: "This is step 3 content." },
          {
            title: "Step 4",
            content: "Expanded step 4 explanation with text format.",
          },
        ];

  // Create expanded steps object (always ensure the last step is expanded)
  const expandedSteps: ExpandedSteps = {};
  expandedSteps[steps.length - 1] = true;

  // Generate HTML for each step
  const stepsHtml: string = steps
    .map((step: Step, index: number): string => {
      const isExpanded: boolean = expandedSteps[index];
      const isLastStep: boolean = index === steps.length - 1;
      const bgColor: string = isLastStep ? "bg-blue-50" : "hover:bg-gray-50";
      const chevronIcon: string = isExpanded
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>';

      const contentHtml: string = isExpanded
        ? `<div class="ml-10 p-3 border-l-2 border-gray-200">
           <div class="whitespace-pre-wrap">${step.content}</div>
         </div>`
        : "";

      return `<div class="mb-2">
      <div class="flex items-center p-3 rounded-md cursor-pointer ${bgColor}" 
           data-step-index="${index}" 
           onclick="toggleStep(${index})">
        <div class="mr-3 text-gray-600">&gt;</div>
        <div class="flex-grow font-medium">${step.title}</div>
        <div>${chevronIcon}</div>
      </div>
      ${contentHtml}
    </div>`;
    })
    .join("");

  // Return the complete HTML structure with embedded TypeScript
  return `<div class="w-full max-w-lg mx-auto p-4" id="progress-steps">
    ${stepsHtml}
  </div>
  <script>
    // Current state
    let steps: Step[] = ${JSON.stringify(steps)};
    let expandedSteps: ExpandedSteps = ${JSON.stringify(expandedSteps)};
    
    // Type definitions as comments for JavaScript execution
    /*
    interface Step {
      title: string;
      content: string;
    }

    interface ExpandedSteps {
      [key: number]: boolean;
    }

    interface ProgressStepsState {
      steps: Step[];
      expandedSteps: ExpandedSteps;
    }

    type OnStepChangeCallback = (state: ProgressStepsState) => void;
    */
    
    // Toggle step function
    function toggleStep(index: number): void {
      // Don't allow collapsing the last step
      if (index === steps.length - 1) return;
      
      // Toggle the expanded state
      expandedSteps[index] = !expandedSteps[index];
      
      // Update the UI
      updateUI();
      
      // Call onStepChange if provided
      if (typeof window.onStepChange === 'function') {
        window.onStepChange({ steps, expandedSteps });
      }
    }
    
    // Function to add a new step
    function addStep(title: string, content: string): void {
      // Create new step
      const newStep: Step = { title, content };
      
      // Add the new step
      steps = [...steps, newStep];
      
      // Set the new step to be expanded
      expandedSteps[steps.length - 1] = true;
      
      // Update the UI
      updateUI();
      
      // Call onStepChange if provided
      if (typeof window.onStepChange === 'function') {
        window.onStepChange({ steps, expandedSteps });
      }
    }
    
    // Function to update the UI based on current state
    function updateUI(): void {
      const container: HTMLElement | null = document.getElementById('progress-steps');
      if (!container) return;
      
      container.innerHTML = steps.map((step: Step, index: number): string => {
        const isExpanded: boolean = expandedSteps[index];
        const isLastStep: boolean = index === steps.length - 1;
        const bgColor: string = isLastStep ? "bg-blue-50" : "hover:bg-gray-50";
        const chevronIcon: string = isExpanded 
          ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>'
          : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>';
        
        const contentHtml: string = isExpanded 
          ? \`<div class="ml-10 p-3 border-l-2 border-gray-200">
               <div class="whitespace-pre-wrap">\${step.content}</div>
             </div>\`
          : '';
        
        return \`<div class="mb-2">
          <div class="flex items-center p-3 rounded-md cursor-pointer \${bgColor}" 
               data-step-index="\${index}" 
               onclick="toggleStep(\${index})">
            <div class="mr-3 text-gray-600">&gt;</div>
            <div class="flex-grow font-medium">\${step.title}</div>
            <div>\${chevronIcon}</div>
          </div>
          \${contentHtml}
        </div>\`;
      }).join('');
    }
    
    // Expose functions globally with TypeScript interface
    // @ts-ignore - Adding to Window
    window.progressSteps = {
      addStep,
      getSteps: (): Step[] => steps,
      getExpandedSteps: (): ExpandedSteps => expandedSteps
    };
    
    // Set the onStepChange callback if provided
    if (${onStepChange !== null}) {
      // @ts-ignore - Adding to Window
      window.onStepChange = ${onStepChange};
    }
  </script>`;
}

// Extend Window interface for TypeScript support
declare global {
  interface Window {
    progressSteps: ProgressStepsMethods;
    onStepChange?: OnStepChangeCallback;
  }
}

export default createProgressSteps;
