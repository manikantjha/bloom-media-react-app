const footerColor = {
  "/": "#FFBF4A",
  "/about": "#327CA5",
  "/services": "#EA6037",
  "/work": "#32949C",
  "/concious-creative-community": "#FFFFFF",
  "/contact": "#FFFFFF",
};

export function getFooterColor(page) {
  if (footerColor[page]) return footerColor[page];
  return "#FFFFFF";
}
