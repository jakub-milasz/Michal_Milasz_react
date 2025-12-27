export const fixOrphans = (text) => {
  if (typeof text !== 'string') return text;

  return text.replace(/ (\b[a-zA-ZóąśłężźńÓĄŚŁĘŽŹŃ]{1,1})\b /g, ' $1\u00A0');
};

export const runOrphanFixer = () => {
  const paragraphs = document.querySelectorAll('p, span, .suptitle, a');
  paragraphs.forEach(p => {
    p.innerHTML = fixOrphans(p.innerHTML);
  });
};