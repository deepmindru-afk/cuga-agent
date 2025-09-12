// ChatInputManager.ts
// This module manages the chat input state during processing

export class ChatInputManager {
  private static instance: ChatInputManager;
  private processingCount: number = 0;
  private originalPlaceholder: string = "";

  private constructor() {}

  public static getInstance(): ChatInputManager {
    if (!ChatInputManager.instance) {
      ChatInputManager.instance = new ChatInputManager();
    }
    return ChatInputManager.instance;
  }

  public disableInput(): void {
    this.processingCount++;

    // Only disable if this is the first processing request
    if (this.processingCount === 1) {
      const inputElement = document.querySelector(".bx--text-input") as HTMLInputElement;
      const sendButton = document.querySelector(".bx--btn--primary") as HTMLButtonElement;

      if (inputElement) {
        this.originalPlaceholder = inputElement.placeholder;
        inputElement.disabled = true;
        inputElement.placeholder = "Processing... Please wait or click Stop";
        inputElement.style.cursor = "not-allowed";
      }

      if (sendButton) {
        sendButton.disabled = true;
        sendButton.style.cursor = "not-allowed";
      }

      // Also disable any other send buttons (icon buttons, etc.)
      const allSendButtons = document.querySelectorAll('[aria-label*="Send"], [title*="Send"]');
      allSendButtons.forEach((button: HTMLButtonElement) => {
        button.disabled = true;
        button.style.cursor = "not-allowed";
      });
    }
  }

  public enableInput(): void {
    this.processingCount = Math.max(0, this.processingCount - 1);

    // Only enable if no more processing is active
    if (this.processingCount === 0) {
      const inputElement = document.querySelector(".bx--text-input") as HTMLInputElement;
      const sendButton = document.querySelector(".bx--btn--primary") as HTMLButtonElement;

      if (inputElement) {
        inputElement.disabled = false;
        inputElement.placeholder = this.originalPlaceholder || "Type a message...";
        inputElement.style.cursor = "text";

        // Focus the input for better UX
        setTimeout(() => {
          inputElement.focus();
        }, 100);
      }

      if (sendButton) {
        sendButton.disabled = false;
        sendButton.style.cursor = "pointer";
      }

      // Re-enable any other send buttons
      const allSendButtons = document.querySelectorAll('[aria-label*="Send"], [title*="Send"]');
      allSendButtons.forEach((button: HTMLButtonElement) => {
        button.disabled = false;
        button.style.cursor = "pointer";
      });
    }
  }

  public isProcessing(): boolean {
    return this.processingCount > 0;
  }

  public reset(): void {
    this.processingCount = 0;
    this.enableInput();
  }
}

// Export a singleton instance
export const chatInputManager = ChatInputManager.getInstance();
