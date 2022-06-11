

class Factory {
    static createElement(
      element: string,
      text?: string,
      className?: string
    ): HTMLElement {
      const e = document.createElement(element);
  
      if (text) e.textContent = text;
  
      if (className) e.classList.add(className);
  
      return e;
    }
  
    static mountElement(parent: HTMLElement, child: HTMLElement | HTMLElement[]) {
      if (!Array.isArray(child)) {
        parent.appendChild(child);
      }
    }
  }

  export default Factory;