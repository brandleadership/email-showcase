const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("item-list")
  .withIcon(Icon.TEXT)
  .withLabel("Item List")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.image.withLabel("Image"),
    cx.part.formattedText
      .withLabel("Formatted Text")
      .withHtmlEditorConfig(
        require("../../../../../configs/text-configs/formatted-text-config")
      )
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("item-list")
      .withAllowedElements(require("../../elements/item"))
  );
