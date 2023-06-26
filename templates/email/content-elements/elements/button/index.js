const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("button-learn-more")
  .withIcon(Icon.DIVIDER)
  .withLabel("Button")
  .withFile(require("./template.twig"))
  .withParts(cx.part.link.withLabel("Button Link"));
