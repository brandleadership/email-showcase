const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("cards")
  .withIcon(Icon.CHAIN)
  .withLabel("Cards")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.image.withLabel("Image"),
    cx.part.plainText.withLabel("Text"),
    cx.part.plainText.withLabel("Text"),
    cx.part.plainText.withLabel("Text"),
    cx.part.plainText.withLabel("Text"),
    cx.part.link.withLabel("Link")
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("single-card-1")
      .withAllowedElements(require("../../elements/single-card")),
    cx.dropzone
      .withDropzone("single-card-2")
      .withAllowedElements(require("../../elements/single-card"))
  );
