function sanitizeHTML(dummyContent) {
  return dummyContent?.replace(/<script.*?<\/script>/g, "");
}

export default sanitizeHTML;
