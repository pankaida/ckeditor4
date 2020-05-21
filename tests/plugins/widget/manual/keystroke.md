@bender-tags: widget, bug, 4.14.1, 3998
@bender-ui: collapsed
@bender-ckeditor-plugins: toolbar, wysiwygarea, sourcearea

### Scenario 1

1. Open console in dev tools.

1. Place cursor inside editor.

1. Press CTRL and Enter key.

#### Expected

Source mode is opened and no error appears in dev console.

#### Unexpected

Error appears in dev console or source code editor is not opened.

### Scenario 2

1. Open console in dev tools.

1. Press "Source" button to see source code.

1. Place cursor inside editor.

1. Press CTRL and Enter key.

#### Expected

WYSIWYG editor is opened and no error appears in dev console.

#### Unexpected

Error appears in dev console or WYSIWYG area is not opened.
