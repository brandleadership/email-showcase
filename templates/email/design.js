require("./styles/styles.scss");

const { cx, Locale } = require("@bsi-cx/design-build");

module.exports = cx.design
  .withTitle("E-Mail Scaffold")
  .withAuthor("BSI Business Systems Integration AG")
  .withDate("20.05.2022")
  .withPreviewImage(require("./thumbnail.png"))
  .withDefaultLocale(Locale.EN)
  .withLocales(Locale.EN, Locale.DE)
  .withContentElementGroups(
    cx.contentElementGroup
      .withGroupId("content")
      .withLabel("Content")
      .withContentElements(require("./content-elements/content/full-email")),
    cx.contentElementGroup
      .withGroupId("sections")
      .withLabel("Sections")
      .withContentElements(
        require("./content-elements/sections/header"),
        require("./content-elements/sections/header-option-two"),
        require("./content-elements/sections/hero"),
        require("./content-elements/sections/full-width-section-with-button"),
        require("./content-elements/sections/feedback-rating"),
        require("./content-elements/sections/cards"),
        require("./content-elements/sections/small-section-with-button"),
        require("./content-elements/sections/image-left-two-col"),
        require("./content-elements/sections/two-col-text"),
        require("./content-elements/sections/three-images-left-section"),
        require("./content-elements/sections/full-width-with-button-link"),
        require("./content-elements/sections/item-list"),
        require("./content-elements/sections/free-delivery"),
        require("./content-elements/sections/full-width-image-title-text"),
        require("./content-elements/sections/two-column-image-title-text"),
        require("./content-elements/sections/test-absolute-image")
      ),
    cx.contentElementGroup
      .withGroupId("elements")
      .withLabel("Elements")
      .withContentElements(
        require("./content-elements/elements/body-text"),
        require("./content-elements/elements/spacer"),
        require("./content-elements/elements/divider"),
        require("./content-elements/elements/divider-violet"),
        require("./content-elements/elements/button"),
        require("./content-elements/elements/button-link"),
        require("./content-elements/elements/button-hero"),
        require("./content-elements/elements/single-card"),
        require("./content-elements/elements/item"),
        require("./content-elements/elements/card-with-image-and-text")
      ),
    cx.contentElementGroup
      .withGroupId("footer")
      .withLabel("Footer")
      .withContentElements(
        require("./content-elements/sections/footer"),
        require("./content-elements/sections/footer-stores"),
        require("./content-elements/sections/footer-links")
        // require("./content-elements/sections/footer-privacy")
      )
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("header")
      .withAllowedElements(
        require("./content-elements/sections/header"),
        require("./content-elements/sections/header-option-two")
      ),
    cx.dropzone
      .withDropzone("main")
      .withAllowedElements(require("./content-elements/content/full-email")),
    cx.dropzone.withDropzone("footer").withAllowedElements(
      require("./content-elements/sections/footer-stores"),
      require("./content-elements/sections/footer"),
      require("./content-elements/sections/footer-links")
      // require("./content-elements/sections/footer-privacy")
    )
  );
