export const removeHtmlTags = (text: string) => {
  const regex_tag = /(<\/?[^>]+\/?>)/g

  return text.replace(regex_tag, "");
}