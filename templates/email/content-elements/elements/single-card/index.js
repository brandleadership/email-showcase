const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("single-card")
  .withIcon(Icon.LIST)
  .withLabel("Single card")
  .withDescription("For Cards Section")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.image.withLabel("Image"),
    cx.part.plainText.withLabel("Text"),
    cx.part.plainText.withLabel("Text"),
    cx.part.plainText.withLabel("Text"),
    cx.part.plainText.withLabel("Text"),
    cx.part.link.withLabel("Link")
  );
