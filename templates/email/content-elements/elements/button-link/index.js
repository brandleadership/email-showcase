const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("button-link")
  .withIcon(Icon.SNIPPET)
  .withLabel("Button Link")
  .withFile(require("./template.twig"))
  .withParts(cx.part.link.withLabel("Button Link"));
