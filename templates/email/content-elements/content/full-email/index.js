const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('full-email')
    .withIcon(Icon.TEXT)
    .withLabel('Email')
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('email-content')
            .withAllowedElements(
                require('../../elements/body-text'),
                require('../../sections/cards'),
                require('../../sections/feedback-rating'),
                require('../../sections/hero'),
                require('../../sections/image-left-two-col'),
                require('../../sections/small-section-with-button'),
                require('../../sections/three-images-left-section'),
                require('../../sections/two-col-text'),
                require('../../sections/full-width-with-button-link'),
                require('../../sections/full-width-section-with-button'),
                require('../../sections/item-list'),
                require('../../sections/free-delivery'),
                require('../../sections/full-width-image-title-text'),
                require('../../sections/two-column-image-title-text'),
                require('../../elements/divider'),
                require('../../elements/spacer')
            )
    )
