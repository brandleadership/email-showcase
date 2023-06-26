const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("button-hero")
  .withIcon(Icon.SNIPPET)
  .withLabel("Button Hero")
  .withFile(require("./template.twig"))
  .withParts(cx.part.link.withLabel("Button Link"));
