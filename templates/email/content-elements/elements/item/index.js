const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("single-item")
  .withIcon(Icon.LIST)
  .withLabel("Single Item")
  .withDescription("For Item List Section")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.image.withLabel("Image"),
    cx.part.plainText.withLabel("Text")
  );
