# Readmorize

A JQuery plugin inspired by [an article on CSS Tricks](https://css-tricks.com/text-fade-read-more/).

For the live demo [click here](https://januszwisniowski.it/readmorize/example/).

# Usage

```javascript
$('#your-element').readmorize({
  step: 150,
  overflowAfter: 150
});
```

Options:

* `overflowAfter` your block will be cut down to this height (in pixels). The overflown content will be hidden and expand only after clicking the *read more* button.
* `step` The number of pixels to expand the block down after *read more* button is clicked. `undefined` means that clicking the link will expand the whole block.
