const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("three-images-left-section")
  .withIcon(Icon.TEXT)
  .withLabel("Section with Image Left")
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
  );
