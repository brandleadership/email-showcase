const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("card-with-image-and-text")
  .withIcon(Icon.LIST)
  .withLabel("Single card")
  .withDescription("For Two Column Image Title Text Section")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.image.withLabel("Image"),
    cx.part.plainText.withLabel("Title"),
    cx.part.formattedText.withLabel("Text")
  );
