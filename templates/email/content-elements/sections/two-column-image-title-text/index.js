const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("two-column-image-title-text")
  .withIcon(Icon.TEXT)
  .withLabel("Two column Image and Title and Text")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.image.withLabel("Text"),
    cx.part.plainText.withLabel("Text"),
    cx.part.formattedText
      .withLabel("Formatted Text")
      .withHtmlEditorConfig(
        require("../../../../../configs/text-configs/formatted-text-config")
      ),
    cx.part.image.withLabel("Text"),
    cx.part.plainText.withLabel("Text"),
    cx.part.formattedText
      .withLabel("Formatted Text")
      .withHtmlEditorConfig(
        require("../../../../../configs/text-configs/formatted-text-config")
      ),
    cx.part.image.withLabel("Text"),
    cx.part.plainText.withLabel("Text"),
    cx.part.formattedText
      .withLabel("Formatted Text")
      .withHtmlEditorConfig(
        require("../../../../../configs/text-configs/formatted-text-config")
      )
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("card-img-1")
      .withAllowedElements(require("../../elements/card-with-image-and-text")),
    cx.dropzone
      .withDropzone("card-img-2")
      .withAllowedElements(require("../../elements/card-with-image-and-text"))
  );
