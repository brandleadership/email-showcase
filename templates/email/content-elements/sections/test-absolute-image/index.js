const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("image-absolute-test")
  .withIcon(Icon.TEXT)
  .withLabel("Image Absolute")
  .withFile(require("./template.twig"))
  .withParts(cx.part.image.withLabel("Image"));
