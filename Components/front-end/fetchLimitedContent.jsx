export function fetchLimitedContent(sanitizedContent) {
    let limitContent = "";
    if (typeof sanitizedContent === 'string'  ) {
    limitContent = Array.from(sanitizedContent).slice(0, 240).join("");
    }
    return limitContent;
  }
  export function fetchLimitedContent2(sanitizedContent) {
    let limitContent = "";
    if (typeof sanitizedContent === 'string'  ) {
    limitContent = Array.from(sanitizedContent).slice(0, 850).join("");
    }
    return limitContent;
  }
  export function fetchLimitedContent3(sanitizedContent) {
    let limitContent = "";
    if (typeof sanitizedContent === 'string'  ) {
    limitContent = Array.from(sanitizedContent).slice(0, 400).join("");
    }
    return limitContent;
  }