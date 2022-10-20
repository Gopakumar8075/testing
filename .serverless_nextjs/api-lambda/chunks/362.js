"use strict";
exports.id = 362;
exports.ids = [362];
exports.modules = {

/***/ 20540:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "createFilterOptions", ({
  enumerable: true,
  get: function () {
    return _useAutocomplete.createFilterOptions;
  }
}));
Object.defineProperty(exports, "useAutocomplete", ({
  enumerable: true,
  get: function () {
    return _useAutocomplete.default;
  }
}));

var _useAutocomplete = _interopRequireWildcard(__webpack_require__(97427));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 97427:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createFilterOptions = createFilterOptions;
exports["default"] = useAutocomplete;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _utils = __webpack_require__(77462);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-constant-condition */
// https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
// Give up on IE11 support for this feature
function stripDiacritics(string) {
  return typeof string.normalize !== 'undefined' ? string.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : string;
}

function createFilterOptions(config = {}) {
  const {
    ignoreAccents = true,
    ignoreCase = true,
    limit,
    matchFrom = 'any',
    stringify,
    trim = false
  } = config;
  return (options, {
    inputValue,
    getOptionLabel
  }) => {
    let input = trim ? inputValue.trim() : inputValue;

    if (ignoreCase) {
      input = input.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
    }

    const filteredOptions = options.filter(option => {
      let candidate = (stringify || getOptionLabel)(option);

      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }

      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }

      return matchFrom === 'start' ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
    });
    return typeof limit === 'number' ? filteredOptions.slice(0, limit) : filteredOptions;
  };
} // To replace with .findIndex() once we stop IE11 support.


function findIndex(array, comp) {
  for (let i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }

  return -1;
}

const defaultFilterOptions = createFilterOptions(); // Number of options to jump in list box when pageup and pagedown keys are used.

const pageSize = 5;

function useAutocomplete(props) {
  const {
    autoComplete = false,
    autoHighlight = false,
    autoSelect = false,
    blurOnSelect = false,
    clearOnBlur = !props.freeSolo,
    clearOnEscape = false,
    componentName = 'useAutocomplete',
    defaultValue = props.multiple ? [] : null,
    disableClearable = false,
    disableCloseOnSelect = false,
    disabled: disabledProp,
    disabledItemsFocusable = false,
    disableListWrap = false,
    filterOptions = defaultFilterOptions,
    filterSelectedOptions = false,
    freeSolo = false,
    getOptionDisabled,
    getOptionLabel: getOptionLabelProp = option => {
      var _option$label;

      return (_option$label = option.label) != null ? _option$label : option;
    },
    groupBy,
    handleHomeEndKeys = !props.freeSolo,
    id: idProp,
    includeInputInList = false,
    inputValue: inputValueProp,
    isOptionEqualToValue = (option, value) => option === value,
    multiple = false,
    onChange,
    onClose,
    onHighlightChange,
    onInputChange,
    onOpen,
    open: openProp,
    openOnFocus = false,
    options,
    readOnly = false,
    selectOnFocus = !props.freeSolo,
    value: valueProp
  } = props;
  const id = (0, _utils.unstable_useId)(idProp);
  let getOptionLabel = getOptionLabelProp;

  getOptionLabel = option => {
    const optionLabel = getOptionLabelProp(option);

    if (typeof optionLabel !== 'string') {
      if (false) {}

      return String(optionLabel);
    }

    return optionLabel;
  };

  const ignoreFocus = React.useRef(false);
  const firstFocus = React.useRef(true);
  const inputRef = React.useRef(null);
  const listboxRef = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [focusedTag, setFocusedTag] = React.useState(-1);
  const defaultHighlighted = autoHighlight ? 0 : -1;
  const highlightedIndexRef = React.useRef(defaultHighlighted);
  const [value, setValueState] = (0, _utils.unstable_useControlled)({
    controlled: valueProp,
    default: defaultValue,
    name: componentName
  });
  const [inputValue, setInputValueState] = (0, _utils.unstable_useControlled)({
    controlled: inputValueProp,
    default: '',
    name: componentName,
    state: 'inputValue'
  });
  const [focused, setFocused] = React.useState(false);
  const resetInputValue = React.useCallback((event, newValue) => {
    // retain current `inputValue` if new option isn't selected and `clearOnBlur` is false
    // When `multiple` is enabled, `newValue` is an array of all selected items including the newly selected item
    const isOptionSelected = multiple ? value.length < newValue.length : newValue !== null;

    if (!isOptionSelected && !clearOnBlur) {
      return;
    }

    let newInputValue;

    if (multiple) {
      newInputValue = '';
    } else if (newValue == null) {
      newInputValue = '';
    } else {
      const optionLabel = getOptionLabel(newValue);
      newInputValue = typeof optionLabel === 'string' ? optionLabel : '';
    }

    if (inputValue === newInputValue) {
      return;
    }

    setInputValueState(newInputValue);

    if (onInputChange) {
      onInputChange(event, newInputValue, 'reset');
    }
  }, [getOptionLabel, inputValue, multiple, onInputChange, setInputValueState, clearOnBlur, value]);
  const prevValue = React.useRef();
  React.useEffect(() => {
    const valueChange = value !== prevValue.current;
    prevValue.current = value;

    if (focused && !valueChange) {
      return;
    } // Only reset the input's value when freeSolo if the component's value changes.


    if (freeSolo && !valueChange) {
      return;
    }

    resetInputValue(null, value);
  }, [value, resetInputValue, focused, prevValue, freeSolo]);
  const [open, setOpenState] = (0, _utils.unstable_useControlled)({
    controlled: openProp,
    default: false,
    name: componentName,
    state: 'open'
  });
  const [inputPristine, setInputPristine] = React.useState(true);
  const inputValueIsSelectedValue = !multiple && value != null && inputValue === getOptionLabel(value);
  const popupOpen = open && !readOnly;
  const filteredOptions = popupOpen ? filterOptions(options.filter(option => {
    if (filterSelectedOptions && (multiple ? value : [value]).some(value2 => value2 !== null && isOptionEqualToValue(option, value2))) {
      return false;
    }

    return true;
  }), // we use the empty string to manipulate `filterOptions` to not filter any options
  // i.e. the filter predicate always returns true
  {
    inputValue: inputValueIsSelectedValue && inputPristine ? '' : inputValue,
    getOptionLabel
  }) : [];
  const listboxAvailable = open && filteredOptions.length > 0 && !readOnly;

  if (false) {}

  const focusTag = (0, _utils.unstable_useEventCallback)(tagToFocus => {
    if (tagToFocus === -1) {
      inputRef.current.focus();
    } else {
      anchorEl.querySelector(`[data-tag-index="${tagToFocus}"]`).focus();
    }
  }); // Ensure the focusedTag is never inconsistent

  React.useEffect(() => {
    if (multiple && focusedTag > value.length - 1) {
      setFocusedTag(-1);
      focusTag(-1);
    }
  }, [value, multiple, focusedTag, focusTag]);

  function validOptionIndex(index, direction) {
    if (!listboxRef.current || index === -1) {
      return -1;
    }

    let nextFocus = index;

    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === filteredOptions.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }

      const option = listboxRef.current.querySelector(`[data-option-index="${nextFocus}"]`); // Same logic as MenuList.js

      const nextFocusDisabled = disabledItemsFocusable ? false : !option || option.disabled || option.getAttribute('aria-disabled') === 'true';

      if (option && !option.hasAttribute('tabindex') || nextFocusDisabled) {
        // Move to the next element.
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  const setHighlightedIndex = (0, _utils.unstable_useEventCallback)(({
    event,
    index,
    reason = 'auto'
  }) => {
    highlightedIndexRef.current = index; // does the index exist?

    if (index === -1) {
      inputRef.current.removeAttribute('aria-activedescendant');
    } else {
      inputRef.current.setAttribute('aria-activedescendant', `${id}-option-${index}`);
    }

    if (onHighlightChange) {
      onHighlightChange(event, index === -1 ? null : filteredOptions[index], reason);
    }

    if (!listboxRef.current) {
      return;
    }

    const prev = listboxRef.current.querySelector('[role="option"].Mui-focused');

    if (prev) {
      prev.classList.remove('Mui-focused');
      prev.classList.remove('Mui-focusVisible');
    }

    const listboxNode = listboxRef.current.parentElement.querySelector('[role="listbox"]'); // "No results"

    if (!listboxNode) {
      return;
    }

    if (index === -1) {
      listboxNode.scrollTop = 0;
      return;
    }

    const option = listboxRef.current.querySelector(`[data-option-index="${index}"]`);

    if (!option) {
      return;
    }

    option.classList.add('Mui-focused');

    if (reason === 'keyboard') {
      option.classList.add('Mui-focusVisible');
    } // Scroll active descendant into view.
    // Logic copied from https://www.w3.org/WAI/ARIA/apg/example-index/combobox/js/select-only.js
    //
    // Consider this API instead once it has a better browser support:
    // .scrollIntoView({ scrollMode: 'if-needed', block: 'nearest' });


    if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== 'mouse') {
      const element = option;
      const scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
      const elementBottom = element.offsetTop + element.offsetHeight;

      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
      } else if (element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) < listboxNode.scrollTop) {
        listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
      }
    }
  });
  const changeHighlightedIndex = (0, _utils.unstable_useEventCallback)(({
    event,
    diff,
    direction = 'next',
    reason = 'auto'
  }) => {
    if (!popupOpen) {
      return;
    }

    const getNextIndex = () => {
      const maxIndex = filteredOptions.length - 1;

      if (diff === 'reset') {
        return defaultHighlighted;
      }

      if (diff === 'start') {
        return 0;
      }

      if (diff === 'end') {
        return maxIndex;
      }

      const newIndex = highlightedIndexRef.current + diff;

      if (newIndex < 0) {
        if (newIndex === -1 && includeInputInList) {
          return -1;
        }

        if (disableListWrap && highlightedIndexRef.current !== -1 || Math.abs(diff) > 1) {
          return 0;
        }

        return maxIndex;
      }

      if (newIndex > maxIndex) {
        if (newIndex === maxIndex + 1 && includeInputInList) {
          return -1;
        }

        if (disableListWrap || Math.abs(diff) > 1) {
          return maxIndex;
        }

        return 0;
      }

      return newIndex;
    };

    const nextIndex = validOptionIndex(getNextIndex(), direction);
    setHighlightedIndex({
      index: nextIndex,
      reason,
      event
    }); // Sync the content of the input with the highlighted option.

    if (autoComplete && diff !== 'reset') {
      if (nextIndex === -1) {
        inputRef.current.value = inputValue;
      } else {
        const option = getOptionLabel(filteredOptions[nextIndex]);
        inputRef.current.value = option; // The portion of the selected suggestion that has not been typed by the user,
        // a completion string, appears inline after the input cursor in the textbox.

        const index = option.toLowerCase().indexOf(inputValue.toLowerCase());

        if (index === 0 && inputValue.length > 0) {
          inputRef.current.setSelectionRange(inputValue.length, option.length);
        }
      }
    }
  });
  const syncHighlightedIndex = React.useCallback(() => {
    if (!popupOpen) {
      return;
    }

    const valueItem = multiple ? value[0] : value; // The popup is empty, reset

    if (filteredOptions.length === 0 || valueItem == null) {
      changeHighlightedIndex({
        diff: 'reset'
      });
      return;
    }

    if (!listboxRef.current) {
      return;
    } // Synchronize the value with the highlighted index


    if (valueItem != null) {
      const currentOption = filteredOptions[highlightedIndexRef.current]; // Keep the current highlighted index if possible

      if (multiple && currentOption && findIndex(value, val => isOptionEqualToValue(currentOption, val)) !== -1) {
        return;
      }

      const itemIndex = findIndex(filteredOptions, optionItem => isOptionEqualToValue(optionItem, valueItem));

      if (itemIndex === -1) {
        changeHighlightedIndex({
          diff: 'reset'
        });
      } else {
        setHighlightedIndex({
          index: itemIndex
        });
      }

      return;
    } // Prevent the highlighted index to leak outside the boundaries.


    if (highlightedIndexRef.current >= filteredOptions.length - 1) {
      setHighlightedIndex({
        index: filteredOptions.length - 1
      });
      return;
    } // Restore the focus to the previous index.


    setHighlightedIndex({
      index: highlightedIndexRef.current
    }); // Ignore filteredOptions (and options, isOptionEqualToValue, getOptionLabel) not to break the scroll position
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [// Only sync the highlighted index when the option switch between empty and not
  filteredOptions.length, // Don't sync the highlighted index with the value when multiple
  // eslint-disable-next-line react-hooks/exhaustive-deps
  multiple ? false : value, filterSelectedOptions, changeHighlightedIndex, setHighlightedIndex, popupOpen, inputValue, multiple]);
  const handleListboxRef = (0, _utils.unstable_useEventCallback)(node => {
    (0, _utils.unstable_setRef)(listboxRef, node);

    if (!node) {
      return;
    }

    syncHighlightedIndex();
  });

  if (false) {}

  React.useEffect(() => {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);

  const handleOpen = event => {
    if (open) {
      return;
    }

    setOpenState(true);
    setInputPristine(true);

    if (onOpen) {
      onOpen(event);
    }
  };

  const handleClose = (event, reason) => {
    if (!open) {
      return;
    }

    setOpenState(false);

    if (onClose) {
      onClose(event, reason);
    }
  };

  const handleValue = (event, newValue, reason, details) => {
    if (multiple) {
      if (value.length === newValue.length && value.every((val, i) => val === newValue[i])) {
        return;
      }
    } else if (value === newValue) {
      return;
    }

    if (onChange) {
      onChange(event, newValue, reason, details);
    }

    setValueState(newValue);
  };

  const isTouch = React.useRef(false);

  const selectNewValue = (event, option, reasonProp = 'selectOption', origin = 'options') => {
    let reason = reasonProp;
    let newValue = option;

    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];

      if (false) {}

      const itemIndex = findIndex(newValue, valueItem => isOptionEqualToValue(option, valueItem));

      if (itemIndex === -1) {
        newValue.push(option);
      } else if (origin !== 'freeSolo') {
        newValue.splice(itemIndex, 1);
        reason = 'removeOption';
      }
    }

    resetInputValue(event, newValue);
    handleValue(event, newValue, reason, {
      option
    });

    if (!disableCloseOnSelect && !event.ctrlKey && !event.metaKey) {
      handleClose(event, reason);
    }

    if (blurOnSelect === true || blurOnSelect === 'touch' && isTouch.current || blurOnSelect === 'mouse' && !isTouch.current) {
      inputRef.current.blur();
    }
  };

  function validTagIndex(index, direction) {
    if (index === -1) {
      return -1;
    }

    let nextFocus = index;

    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === value.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }

      const option = anchorEl.querySelector(`[data-tag-index="${nextFocus}"]`); // Same logic as MenuList.js

      if (!option || !option.hasAttribute('tabindex') || option.disabled || option.getAttribute('aria-disabled') === 'true') {
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  const handleFocusTag = (event, direction) => {
    if (!multiple) {
      return;
    }

    if (inputValue === '') {
      handleClose(event, 'toggleInput');
    }

    let nextTag = focusedTag;

    if (focusedTag === -1) {
      if (inputValue === '' && direction === 'previous') {
        nextTag = value.length - 1;
      }
    } else {
      nextTag += direction === 'next' ? 1 : -1;

      if (nextTag < 0) {
        nextTag = 0;
      }

      if (nextTag === value.length) {
        nextTag = -1;
      }
    }

    nextTag = validTagIndex(nextTag, direction);
    setFocusedTag(nextTag);
    focusTag(nextTag);
  };

  const handleClear = event => {
    ignoreFocus.current = true;
    setInputValueState('');

    if (onInputChange) {
      onInputChange(event, '', 'clear');
    }

    handleValue(event, multiple ? [] : null, 'clear');
  };

  const handleKeyDown = other => event => {
    if (other.onKeyDown) {
      other.onKeyDown(event);
    }

    if (event.defaultMuiPrevented) {
      return;
    }

    if (focusedTag !== -1 && ['ArrowLeft', 'ArrowRight'].indexOf(event.key) === -1) {
      setFocusedTag(-1);
      focusTag(-1);
    } // Wait until IME is settled.


    if (event.which !== 229) {
      switch (event.key) {
        case 'Home':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'start',
              direction: 'next',
              reason: 'keyboard',
              event
            });
          }

          break;

        case 'End':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'end',
              direction: 'previous',
              reason: 'keyboard',
              event
            });
          }

          break;

        case 'PageUp':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: -pageSize,
            direction: 'previous',
            reason: 'keyboard',
            event
          });
          handleOpen(event);
          break;

        case 'PageDown':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: pageSize,
            direction: 'next',
            reason: 'keyboard',
            event
          });
          handleOpen(event);
          break;

        case 'ArrowDown':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: 1,
            direction: 'next',
            reason: 'keyboard',
            event
          });
          handleOpen(event);
          break;

        case 'ArrowUp':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: -1,
            direction: 'previous',
            reason: 'keyboard',
            event
          });
          handleOpen(event);
          break;

        case 'ArrowLeft':
          handleFocusTag(event, 'previous');
          break;

        case 'ArrowRight':
          handleFocusTag(event, 'next');
          break;

        case 'Enter':
          if (highlightedIndexRef.current !== -1 && popupOpen) {
            const option = filteredOptions[highlightedIndexRef.current];
            const disabled = getOptionDisabled ? getOptionDisabled(option) : false; // Avoid early form validation, let the end-users continue filling the form.

            event.preventDefault();

            if (disabled) {
              return;
            }

            selectNewValue(event, option, 'selectOption'); // Move the selection to the end.

            if (autoComplete) {
              inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
            }
          } else if (freeSolo && inputValue !== '' && inputValueIsSelectedValue === false) {
            if (multiple) {
              // Allow people to add new values before they submit the form.
              event.preventDefault();
            }

            selectNewValue(event, inputValue, 'createOption', 'freeSolo');
          }

          break;

        case 'Escape':
          if (popupOpen) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClose(event, 'escape');
          } else if (clearOnEscape && (inputValue !== '' || multiple && value.length > 0)) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClear(event);
          }

          break;

        case 'Backspace':
          if (multiple && !readOnly && inputValue === '' && value.length > 0) {
            const index = focusedTag === -1 ? value.length - 1 : focusedTag;
            const newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, 'removeOption', {
              option: value[index]
            });
          }

          break;

        default:
      }
    }
  };

  const handleFocus = event => {
    setFocused(true);

    if (openOnFocus && !ignoreFocus.current) {
      handleOpen(event);
    }
  };

  const handleBlur = event => {
    // Ignore the event when using the scrollbar with IE11
    if (listboxRef.current !== null && listboxRef.current.parentElement.contains(document.activeElement)) {
      inputRef.current.focus();
      return;
    }

    setFocused(false);
    firstFocus.current = true;
    ignoreFocus.current = false;

    if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
      selectNewValue(event, filteredOptions[highlightedIndexRef.current], 'blur');
    } else if (autoSelect && freeSolo && inputValue !== '') {
      selectNewValue(event, inputValue, 'blur', 'freeSolo');
    } else if (clearOnBlur) {
      resetInputValue(event, value);
    }

    handleClose(event, 'blur');
  };

  const handleInputChange = event => {
    const newValue = event.target.value;

    if (inputValue !== newValue) {
      setInputValueState(newValue);
      setInputPristine(false);

      if (onInputChange) {
        onInputChange(event, newValue, 'input');
      }
    }

    if (newValue === '') {
      if (!disableClearable && !multiple) {
        handleValue(event, null, 'clear');
      }
    } else {
      handleOpen(event);
    }
  };

  const handleOptionMouseOver = event => {
    setHighlightedIndex({
      event,
      index: Number(event.currentTarget.getAttribute('data-option-index')),
      reason: 'mouse'
    });
  };

  const handleOptionTouchStart = () => {
    isTouch.current = true;
  };

  const handleOptionClick = event => {
    const index = Number(event.currentTarget.getAttribute('data-option-index'));
    selectNewValue(event, filteredOptions[index], 'selectOption');
    isTouch.current = false;
  };

  const handleTagDelete = index => event => {
    const newValue = value.slice();
    newValue.splice(index, 1);
    handleValue(event, newValue, 'removeOption', {
      option: value[index]
    });
  };

  const handlePopupIndicator = event => {
    if (open) {
      handleClose(event, 'toggleInput');
    } else {
      handleOpen(event);
    }
  }; // Prevent input blur when interacting with the combobox


  const handleMouseDown = event => {
    if (event.target.getAttribute('id') !== id) {
      event.preventDefault();
    }
  }; // Focus the input when interacting with the combobox


  const handleClick = () => {
    inputRef.current.focus();

    if (selectOnFocus && firstFocus.current && inputRef.current.selectionEnd - inputRef.current.selectionStart === 0) {
      inputRef.current.select();
    }

    firstFocus.current = false;
  };

  const handleInputMouseDown = event => {
    if (inputValue === '' || !open) {
      handlePopupIndicator(event);
    }
  };

  let dirty = freeSolo && inputValue.length > 0;
  dirty = dirty || (multiple ? value.length > 0 : value !== null);
  let groupedOptions = filteredOptions;

  if (groupBy) {
    // used to keep track of key and indexes in the result array
    const indexBy = new Map();
    let warn = false;
    groupedOptions = filteredOptions.reduce((acc, option, index) => {
      const group = groupBy(option);

      if (acc.length > 0 && acc[acc.length - 1].group === group) {
        acc[acc.length - 1].options.push(option);
      } else {
        if (false) {}

        acc.push({
          key: index,
          index,
          group,
          options: [option]
        });
      }

      return acc;
    }, []);
  }

  if (disabledProp && focused) {
    handleBlur();
  }

  return {
    getRootProps: (other = {}) => (0, _extends2.default)({
      'aria-owns': listboxAvailable ? `${id}-listbox` : null
    }, other, {
      onKeyDown: handleKeyDown(other),
      onMouseDown: handleMouseDown,
      onClick: handleClick
    }),
    getInputLabelProps: () => ({
      id: `${id}-label`,
      htmlFor: id
    }),
    getInputProps: () => ({
      id,
      value: inputValue,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onChange: handleInputChange,
      onMouseDown: handleInputMouseDown,
      // if open then this is handled imperativeley so don't let react override
      // only have an opinion about this when closed
      'aria-activedescendant': popupOpen ? '' : null,
      'aria-autocomplete': autoComplete ? 'both' : 'list',
      'aria-controls': listboxAvailable ? `${id}-listbox` : undefined,
      'aria-expanded': listboxAvailable,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: 'off',
      ref: inputRef,
      autoCapitalize: 'none',
      spellCheck: 'false',
      role: 'combobox'
    }),
    getClearProps: () => ({
      tabIndex: -1,
      onClick: handleClear
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      onClick: handlePopupIndicator
    }),
    getTagProps: ({
      index
    }) => (0, _extends2.default)({
      key: index,
      'data-tag-index': index,
      tabIndex: -1
    }, !readOnly && {
      onDelete: handleTagDelete(index)
    }),
    getListboxProps: () => ({
      role: 'listbox',
      id: `${id}-listbox`,
      'aria-labelledby': `${id}-label`,
      ref: handleListboxRef,
      onMouseDown: event => {
        // Prevent blur
        event.preventDefault();
      }
    }),
    getOptionProps: ({
      index,
      option
    }) => {
      const selected = (multiple ? value : [value]).some(value2 => value2 != null && isOptionEqualToValue(option, value2));
      const disabled = getOptionDisabled ? getOptionDisabled(option) : false;
      return {
        key: getOptionLabel(option),
        tabIndex: -1,
        role: 'option',
        id: `${id}-option-${index}`,
        onMouseOver: handleOptionMouseOver,
        onClick: handleOptionClick,
        onTouchStart: handleOptionTouchStart,
        'data-option-index': index,
        'aria-disabled': disabled,
        'aria-selected': selected
      };
    },
    id,
    inputValue,
    value,
    dirty,
    popupOpen,
    focused: focused || focusedTag !== -1,
    anchorEl,
    setAnchorEl,
    focusedTag,
    groupedOptions
  };
}

/***/ }),

/***/ 43628:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _composeClasses = _interopRequireDefault(__webpack_require__(36630));

var _useBadge = _interopRequireDefault(__webpack_require__(76776));

var _badgeUnstyledClasses = __webpack_require__(64866);

var _utils = __webpack_require__(6443);

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["badgeContent", "component", "children", "components", "componentsProps", "invisible", "max", "showZero"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    invisible
  } = ownerState;
  const slots = {
    root: ['root'],
    badge: ['badge', invisible && 'invisible']
  };
  return (0, _composeClasses.default)(slots, _badgeUnstyledClasses.getBadgeUnstyledUtilityClass, undefined);
};
/**
 *
 * Demos:
 *
 * - [Badge](https://mui.com/base/react-badge/)
 *
 * API:
 *
 * - [BadgeUnstyled API](https://mui.com/base/api/badge-unstyled/)
 */


const BadgeUnstyled = /*#__PURE__*/React.forwardRef(function BadgeUnstyled(props, ref) {
  const {
    component,
    children,
    components = {},
    componentsProps = {},
    max: maxProp = 99,
    showZero = false
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    badgeContent,
    max,
    displayValue,
    invisible
  } = (0, _useBadge.default)((0, _extends2.default)({}, props, {
    max: maxProp
  }));
  const ownerState = (0, _extends2.default)({}, props, {
    badgeContent,
    invisible,
    max,
    showZero
  });
  const classes = useUtilityClasses(ownerState);
  const Root = component || components.Root || 'span';
  const rootProps = (0, _utils.useSlotProps)({
    elementType: Root,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref
    },
    ownerState,
    className: classes.root
  });
  const Badge = components.Badge || 'span';
  const badgeProps = (0, _utils.useSlotProps)({
    elementType: Badge,
    externalSlotProps: componentsProps.badge,
    ownerState,
    className: classes.badge
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(Badge, (0, _extends2.default)({}, badgeProps, {
      children: displayValue
    }))]
  }));
});
 false ? 0 : void 0;
var _default = BadgeUnstyled;
exports["default"] = _default;

/***/ }),

/***/ 6005:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 64866:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getBadgeUnstyledUtilityClass = getBadgeUnstyledUtilityClass;

var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(11469));

var _generateUtilityClass = _interopRequireDefault(__webpack_require__(7084));

function getBadgeUnstyledUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('BaseBadge', slot);
}

const badgeUnstyledClasses = (0, _generateUtilityClasses.default)('BaseBadge', ['root', 'badge', 'invisible']);
var _default = badgeUnstyledClasses;
exports["default"] = _default;

/***/ }),

/***/ 61149:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useBadge: true,
  badgeUnstyledClasses: true
};
Object.defineProperty(exports, "badgeUnstyledClasses", ({
  enumerable: true,
  get: function () {
    return _badgeUnstyledClasses.default;
  }
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _BadgeUnstyled.default;
  }
}));
Object.defineProperty(exports, "useBadge", ({
  enumerable: true,
  get: function () {
    return _useBadge.default;
  }
}));

var _BadgeUnstyled = _interopRequireDefault(__webpack_require__(43628));

var _useBadge = _interopRequireWildcard(__webpack_require__(76776));

Object.keys(_useBadge).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useBadge[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useBadge[key];
    }
  });
});

var _BadgeUnstyled2 = __webpack_require__(6005);

Object.keys(_BadgeUnstyled2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _BadgeUnstyled2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BadgeUnstyled2[key];
    }
  });
});

var _badgeUnstyledClasses = _interopRequireWildcard(__webpack_require__(64866));

Object.keys(_badgeUnstyledClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _badgeUnstyledClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _badgeUnstyledClasses[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 76776:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useBadge;

var _utils = __webpack_require__(77462);

function useBadge(parameters) {
  const {
    badgeContent: badgeContentProp,
    invisible: invisibleProp = false,
    max: maxProp = 99,
    showZero = false
  } = parameters;
  const prevProps = (0, _utils.usePreviousProps)({
    badgeContent: badgeContentProp,
    max: maxProp
  });
  let invisible = invisibleProp;

  if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
    invisible = true;
  }

  const {
    badgeContent,
    max = maxProp
  } = invisible ? prevProps : parameters;
  const displayValue = badgeContent && Number(badgeContent) > max ? `${max}+` : badgeContent;
  return {
    badgeContent,
    invisible,
    max,
    displayValue
  };
}

/***/ }),

/***/ 68203:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _composeClasses = _interopRequireDefault(__webpack_require__(36630));

var _buttonUnstyledClasses = __webpack_require__(10601);

var _useButton = _interopRequireDefault(__webpack_require__(25118));

var _utils = __webpack_require__(6443);

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["action", "children", "component", "components", "componentsProps", "disabled", "focusableWhenDisabled", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseLeave"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    active,
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', active && 'active']
  };
  return (0, _composeClasses.default)(slots, _buttonUnstyledClasses.getButtonUnstyledUtilityClass, {});
};
/**
 * The foundation for building custom-styled buttons.
 *
 * Demos:
 *
 * - [Button](https://mui.com/base/react-button/)
 *
 * API:
 *
 * - [ButtonUnstyled API](https://mui.com/base/api/button-unstyled/)
 */


const ButtonUnstyled = /*#__PURE__*/React.forwardRef(function ButtonUnstyled(props, forwardedRef) {
  var _ref;

  const {
    action,
    children,
    component,
    components = {},
    componentsProps = {},
    focusableWhenDisabled = false
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const buttonRef = React.useRef();
  const {
    active,
    focusVisible,
    setFocusVisible,
    getRootProps
  } = (0, _useButton.default)((0, _extends2.default)({}, props, {
    focusableWhenDisabled
  }));
  React.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), [setFocusVisible]);
  const ownerState = (0, _extends2.default)({}, props, {
    active,
    focusableWhenDisabled,
    focusVisible
  });
  const classes = useUtilityClasses(ownerState);
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : 'button';
  const rootProps = (0, _utils.useSlotProps)({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: componentsProps.root,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps, {
    children: children
  }));
});
 false ? 0 : void 0;
var _default = ButtonUnstyled;
exports["default"] = _default;

/***/ }),

/***/ 4166:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 10601:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getButtonUnstyledUtilityClass = getButtonUnstyledUtilityClass;

var _generateUtilityClass = _interopRequireDefault(__webpack_require__(7084));

var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(11469));

function getButtonUnstyledUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('ButtonUnstyled', slot);
}

const buttonUnstyledClasses = (0, _generateUtilityClasses.default)('ButtonUnstyled', ['root', 'active', 'disabled', 'focusVisible']);
var _default = buttonUnstyledClasses;
exports["default"] = _default;

/***/ }),

/***/ 64651:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  buttonUnstyledClasses: true,
  getButtonUnstyledUtilityClass: true,
  useButton: true
};
Object.defineProperty(exports, "buttonUnstyledClasses", ({
  enumerable: true,
  get: function () {
    return _buttonUnstyledClasses.default;
  }
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _ButtonUnstyled.default;
  }
}));
Object.defineProperty(exports, "getButtonUnstyledUtilityClass", ({
  enumerable: true,
  get: function () {
    return _buttonUnstyledClasses.getButtonUnstyledUtilityClass;
  }
}));
Object.defineProperty(exports, "useButton", ({
  enumerable: true,
  get: function () {
    return _useButton.default;
  }
}));

var _ButtonUnstyled = _interopRequireDefault(__webpack_require__(68203));

var _buttonUnstyledClasses = _interopRequireWildcard(__webpack_require__(10601));

var _ButtonUnstyled2 = __webpack_require__(4166);

Object.keys(_ButtonUnstyled2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ButtonUnstyled2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ButtonUnstyled2[key];
    }
  });
});

var _useButton = _interopRequireDefault(__webpack_require__(25118));

var _useButton2 = __webpack_require__(99941);

Object.keys(_useButton2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useButton2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useButton2[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 25118:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useButton;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _utils = __webpack_require__(77462);

var _extractEventHandlers = _interopRequireDefault(__webpack_require__(60389));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useButton(parameters) {
  const {
    disabled = false,
    focusableWhenDisabled,
    href,
    ref,
    tabIndex,
    to,
    type
  } = parameters;
  const buttonRef = React.useRef();
  const [active, setActive] = React.useState(false);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = (0, _utils.unstable_useIsFocusVisible)();
  const [focusVisible, setFocusVisible] = React.useState(false);

  if (disabled && !focusableWhenDisabled && focusVisible) {
    setFocusVisible(false);
  }

  React.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);
  const [hostElementName, setHostElementName] = React.useState('');

  const createHandleMouseLeave = otherHandlers => event => {
    var _otherHandlers$onMous;

    if (focusVisible) {
      event.preventDefault();
    }

    (_otherHandlers$onMous = otherHandlers.onMouseLeave) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);
  };

  const createHandleBlur = otherHandlers => event => {
    var _otherHandlers$onBlur;

    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }

    (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
  };

  const createHandleFocus = otherHandlers => event => {
    var _otherHandlers$onFocu2;

    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }

    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      var _otherHandlers$onFocu;

      setFocusVisible(true);
      (_otherHandlers$onFocu = otherHandlers.onFocusVisible) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
    }

    (_otherHandlers$onFocu2 = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu2.call(otherHandlers, event);
  };

  const isNativeButton = () => {
    const button = buttonRef.current;
    return hostElementName === 'BUTTON' || hostElementName === 'INPUT' && ['button', 'submit', 'reset'].includes(button == null ? void 0 : button.type) || hostElementName === 'A' && (button == null ? void 0 : button.href);
  };

  const createHandleClick = otherHandlers => event => {
    if (!disabled) {
      var _otherHandlers$onClic;

      (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
    }
  };

  const createHandleMouseDown = otherHandlers => event => {
    var _otherHandlers$onMous2;

    if (event.target === event.currentTarget && !disabled) {
      setActive(true);
    }

    (_otherHandlers$onMous2 = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous2.call(otherHandlers, event);
  };

  const createHandleMouseUp = otherHandlers => event => {
    var _otherHandlers$onMous3;

    if (event.target === event.currentTarget) {
      setActive(false);
    }

    (_otherHandlers$onMous3 = otherHandlers.onMouseUp) == null ? void 0 : _otherHandlers$onMous3.call(otherHandlers, event);
  };

  const createHandleKeyDown = otherHandlers => event => {
    var _otherHandlers$onKeyD;

    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null ? void 0 : _otherHandlers$onKeyD.call(otherHandlers, event);

    if (event.defaultPrevented) {
      return;
    }

    if (event.target === event.currentTarget && !isNativeButton() && event.key === ' ') {
      event.preventDefault();
    }

    if (event.target === event.currentTarget && event.key === ' ' && !disabled) {
      setActive(true);
    } // Keyboard accessibility for non interactive elements


    if (event.target === event.currentTarget && !isNativeButton() && event.key === 'Enter' && !disabled) {
      var _otherHandlers$onClic2;

      (_otherHandlers$onClic2 = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic2.call(otherHandlers, event);
      event.preventDefault();
    }
  };

  const createHandleKeyUp = otherHandlers => event => {
    var _otherHandlers$onKeyU;

    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (event.target === event.currentTarget) {
      setActive(false);
    }

    (_otherHandlers$onKeyU = otherHandlers.onKeyUp) == null ? void 0 : _otherHandlers$onKeyU.call(otherHandlers, event); // Keyboard accessibility for non interactive elements

    if (event.target === event.currentTarget && !isNativeButton() && !disabled && event.key === ' ' && !event.defaultPrevented) {
      var _otherHandlers$onClic3;

      (_otherHandlers$onClic3 = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic3.call(otherHandlers, event);
    }
  };

  const handleOwnRef = (0, _utils.unstable_useForkRef)(focusVisibleRef, buttonRef);
  const handleRef = (0, _utils.unstable_useForkRef)(ref, handleOwnRef);

  const updateRef = instance => {
    var _instance$tagName;

    setHostElementName((_instance$tagName = instance == null ? void 0 : instance.tagName) != null ? _instance$tagName : '');
    (0, _utils.unstable_setRef)(handleRef, instance);
  };

  const buttonProps = {};

  if (hostElementName === 'BUTTON') {
    buttonProps.type = type != null ? type : 'button';

    if (focusableWhenDisabled) {
      buttonProps['aria-disabled'] = disabled;
    } else {
      buttonProps.disabled = disabled;
    }
  } else if (hostElementName !== '') {
    if (!href && !to) {
      buttonProps.role = 'button';
      buttonProps.tabIndex = tabIndex != null ? tabIndex : 0;
    }

    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
      buttonProps.tabIndex = focusableWhenDisabled ? tabIndex != null ? tabIndex : 0 : -1;
    }
  }

  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = (0, _extractEventHandlers.default)(parameters);
    const externalEventHandlers = (0, _extends2.default)({}, propsEventHandlers, otherHandlers); // onFocusVisible can be present on the props, but since it's not a valid React event handler,
    // it must not be forwarded to the inner component.

    delete externalEventHandlers.onFocusVisible;
    return (0, _extends2.default)({
      type
    }, externalEventHandlers, buttonProps, {
      onBlur: createHandleBlur(externalEventHandlers),
      onClick: createHandleClick(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      onKeyUp: createHandleKeyUp(externalEventHandlers),
      onMouseDown: createHandleMouseDown(externalEventHandlers),
      onMouseLeave: createHandleMouseLeave(externalEventHandlers),
      onMouseUp: createHandleMouseUp(externalEventHandlers),
      ref: updateRef
    });
  };

  return {
    getRootProps,
    focusVisible,
    setFocusVisible,
    disabled,
    active
  };
}

/***/ }),

/***/ 99941:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 48779:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _utils = __webpack_require__(77462);

var _jsxRuntime = __webpack_require__(85893);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// TODO: return `EventHandlerName extends `on${infer EventName}` ? Lowercase<EventName> : never` once generatePropTypes runs with TS 4.1
function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}

function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}

/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 *
 * Demos:
 *
 * - [Click away listener](https://mui.com/base/react-click-away-listener/)
 *
 * API:
 *
 * - [ClickAwayListener API](https://mui.com/base/api/click-away-listener/)
 */
function ClickAwayListener(props) {
  const {
    children,
    disableReactTree = false,
    mouseEvent = 'onClick',
    onClickAway,
    touchEvent = 'onTouchEnd'
  } = props;
  const movedRef = React.useRef(false);
  const nodeRef = React.useRef(null);
  const activatedRef = React.useRef(false);
  const syntheticEventRef = React.useRef(false);
  React.useEffect(() => {
    // Ensure that this component is not "activated" synchronously.
    // https://github.com/facebook/react/issues/20074
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  const handleRef = (0, _utils.unstable_useForkRef)( // @ts-expect-error TODO upstream fix
  children.ref, nodeRef); // The handler doesn't take event.defaultPrevented into account:
  //
  // event.preventDefault() is meant to stop default behaviors like
  // clicking a checkbox to check it, hitting a button to submit a form,
  // and hitting left arrow to move the cursor in a text input etc.
  // Only special HTML elements have these default behaviors.

  const handleClickAway = (0, _utils.unstable_useEventCallback)(event => {
    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = (0, _utils.unstable_ownerDocument)(nodeRef.current); // 1. IE11 support, which trigger the handleClickAway even after the unbind
    // 2. The child might render null.
    // 3. Behave like a blur listener.

    if (!activatedRef.current || !nodeRef.current || 'clientX' in event && clickedRootScrollbar(event, doc)) {
      return;
    } // Do not act if user performed touchmove


    if (movedRef.current) {
      movedRef.current = false;
      return;
    }

    let insideDOM; // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js

    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains( // @ts-expect-error returns `false` as intended when not dispatched from a Node
      event.target) || nodeRef.current.contains( // @ts-expect-error returns `false` as intended when not dispatched from a Node
      event.target);
    }

    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  }); // Keep track of mouse/touch events that bubbled up through the portal.

  const createHandleSynthetic = handlerName => event => {
    syntheticEventRef.current = true;
    const childrenPropsHandler = children.props[handlerName];

    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };

  const childrenProps = {
    ref: handleRef
  };

  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }

  React.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = (0, _utils.unstable_ownerDocument)(nodeRef.current);

      const handleTouchMove = () => {
        movedRef.current = true;
      };

      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener('touchmove', handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener('touchmove', handleTouchMove);
      };
    }

    return undefined;
  }, [handleClickAway, touchEvent]);

  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }

  React.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = (0, _utils.unstable_ownerDocument)(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }

    return undefined;
  }, [handleClickAway, mouseEvent]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(React.Fragment, {
    children: /*#__PURE__*/React.cloneElement(children, childrenProps)
  });
}

 false ? 0 : void 0;

if (false) {}

var _default = ClickAwayListener;
exports["default"] = _default;

/***/ }),

/***/ 80357:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _ClickAwayListener.default;
  }
}));

var _ClickAwayListener = _interopRequireWildcard(__webpack_require__(48779));

Object.keys(_ClickAwayListener).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ClickAwayListener[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ClickAwayListener[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 30810:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _utils = __webpack_require__(77462);

var _FormControlUnstyledContext = _interopRequireDefault(__webpack_require__(24987));

var _formControlUnstyledClasses = __webpack_require__(97283);

var _utils2 = __webpack_require__(6443);

var _composeClasses = _interopRequireDefault(__webpack_require__(36630));

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["defaultValue", "children", "component", "components", "componentsProps", "disabled", "error", "onChange", "required", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0) && value !== '';
}

function useUtilityClasses(ownerState) {
  const {
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focused && 'focused', error && 'error', filled && 'filled', required && 'required']
  };
  return (0, _composeClasses.default)(slots, _formControlUnstyledClasses.getFormControlUnstyledUtilityClass, {});
}
/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 * *   FormLabel
 * *   FormHelperText
 * *   Input
 * *   InputLabel
 *
 * You can find one composition example below and more going to [the demos](https://mui.com/material-ui/react-text-field/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️ Only one `Input` can be used within a FormControl because it create visual inconsistencies.
 * For instance, only one input can be focused at the same time, the state shouldn't be shared.
 *
 * Demos:
 *
 * - [Form control](https://mui.com/base/react-form-control/)
 *
 * API:
 *
 * - [FormControlUnstyled API](https://mui.com/base/api/form-control-unstyled/)
 */


const FormControlUnstyled = /*#__PURE__*/React.forwardRef(function FormControlUnstyled(props, ref) {
  var _ref;

  const {
    defaultValue,
    children,
    component,
    components = {},
    componentsProps = {},
    disabled = false,
    error = false,
    onChange,
    required = false,
    value: incomingValue
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const [value, setValue] = (0, _utils.unstable_useControlled)({
    controlled: incomingValue,
    default: defaultValue,
    name: 'FormControl',
    state: 'value'
  });
  const filled = hasValue(value);
  const [focused, setFocused] = React.useState(false);

  if (disabled && focused) {
    setFocused(false);
  }

  const ownerState = (0, _extends2.default)({}, props, {
    disabled,
    error,
    filled,
    focused,
    required
  });

  const handleChange = event => {
    setValue(event.target.value);
    onChange == null ? void 0 : onChange(event);
  };

  const childContext = {
    disabled,
    error,
    filled,
    focused,
    onBlur: () => {
      setFocused(false);
    },
    onChange: handleChange,
    onFocus: () => {
      setFocused(true);
    },
    required,
    value: value != null ? value : ''
  };
  const classes = useUtilityClasses(ownerState);

  const renderChildren = () => {
    if (typeof children === 'function') {
      return children(childContext);
    }

    return children;
  };

  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : 'div';
  const rootProps = (0, _utils2.useSlotProps)({
    elementType: Root,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref,
      children: renderChildren()
    },
    ownerState,
    className: classes.root
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlUnstyledContext.default.Provider, {
    value: childContext,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps))
  });
});
 false ? 0 : void 0;
var _default = FormControlUnstyled;
exports["default"] = _default;

/***/ }),

/***/ 24987:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @ignore - internal component.
 */
const FormControlUnstyledContext = /*#__PURE__*/React.createContext(undefined);

if (false) {}

var _default = FormControlUnstyledContext;
exports["default"] = _default;

/***/ }),

/***/ 97283:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getFormControlUnstyledUtilityClass = getFormControlUnstyledUtilityClass;

var _generateUtilityClass = _interopRequireDefault(__webpack_require__(7084));

var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(11469));

function getFormControlUnstyledUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('BaseFormControl', slot);
}

const formControlUnstyledClasses = (0, _generateUtilityClasses.default)('BaseFormControl', ['root', 'disabled', 'error', 'filled', 'focused', 'required']);
var _default = formControlUnstyledClasses;
exports["default"] = _default;

/***/ }),

/***/ 47735:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  FormControlUnstyledContext: true,
  formControlUnstyledClasses: true,
  useFormControlUnstyledContext: true
};
Object.defineProperty(exports, "FormControlUnstyledContext", ({
  enumerable: true,
  get: function () {
    return _FormControlUnstyledContext.default;
  }
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _FormControlUnstyled.default;
  }
}));
Object.defineProperty(exports, "formControlUnstyledClasses", ({
  enumerable: true,
  get: function () {
    return _formControlUnstyledClasses.default;
  }
}));
Object.defineProperty(exports, "useFormControlUnstyledContext", ({
  enumerable: true,
  get: function () {
    return _useFormControlUnstyledContext.default;
  }
}));

var _FormControlUnstyled = _interopRequireDefault(__webpack_require__(30810));

var _FormControlUnstyledContext = _interopRequireDefault(__webpack_require__(24987));

var _formControlUnstyledClasses = _interopRequireWildcard(__webpack_require__(97283));

Object.keys(_formControlUnstyledClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _formControlUnstyledClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formControlUnstyledClasses[key];
    }
  });
});

var _useFormControlUnstyledContext = _interopRequireDefault(__webpack_require__(37558));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 37558:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useFormControlUnstyledContext;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _FormControlUnstyledContext = _interopRequireDefault(__webpack_require__(24987));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useFormControlUnstyledContext() {
  return React.useContext(_FormControlUnstyledContext.default);
}

/***/ }),

/***/ 25075:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _isHostComponent = _interopRequireDefault(__webpack_require__(65311));

var _inputUnstyledClasses = _interopRequireDefault(__webpack_require__(13632));

var _useInput = _interopRequireDefault(__webpack_require__(76640));

var _utils = __webpack_require__(6443);

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["aria-describedby", "aria-label", "aria-labelledby", "autoComplete", "autoFocus", "className", "component", "components", "componentsProps", "defaultValue", "disabled", "endAdornment", "error", "id", "maxRows", "minRows", "multiline", "name", "onClick", "onChange", "onKeyDown", "onKeyUp", "onFocus", "onBlur", "placeholder", "readOnly", "required", "rows", "type", "startAdornment", "value"],
      _excluded2 = ["ownerState"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 *
 * Demos:
 *
 * - [Input](https://mui.com/base/react-input/)
 *
 * API:
 *
 * - [InputUnstyled API](https://mui.com/base/api/input-unstyled/)
 */
const InputUnstyled = /*#__PURE__*/React.forwardRef(function InputUnstyled(props, forwardedRef) {
  var _ref, _components$Input;

  const {
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    autoComplete,
    autoFocus,
    className,
    component,
    components = {},
    componentsProps = {},
    defaultValue,
    disabled,
    endAdornment,
    error,
    id,
    maxRows,
    minRows,
    multiline = false,
    name,
    onClick,
    onChange,
    onKeyDown,
    onKeyUp,
    onFocus,
    onBlur,
    placeholder,
    readOnly,
    required,
    rows,
    type = 'text',
    startAdornment,
    value
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    getRootProps,
    getInputProps,
    focused,
    formControlContext,
    error: errorState,
    disabled: disabledState
  } = (0, _useInput.default)({
    disabled,
    defaultValue,
    error,
    onBlur,
    onClick,
    onChange,
    onFocus,
    required,
    value
  });
  const ownerState = (0, _extends2.default)({}, props, {
    disabled: disabledState,
    error: errorState,
    focused,
    formControlContext,
    multiline,
    type
  });
  const rootStateClasses = {
    [_inputUnstyledClasses.default.disabled]: disabledState,
    [_inputUnstyledClasses.default.error]: errorState,
    [_inputUnstyledClasses.default.focused]: focused,
    [_inputUnstyledClasses.default.formControl]: Boolean(formControlContext),
    [_inputUnstyledClasses.default.multiline]: multiline,
    [_inputUnstyledClasses.default.adornedStart]: Boolean(startAdornment),
    [_inputUnstyledClasses.default.adornedEnd]: Boolean(endAdornment)
  };
  const inputStateClasses = {
    [_inputUnstyledClasses.default.disabled]: disabledState,
    [_inputUnstyledClasses.default.multiline]: multiline
  };
  const propsToForward = {
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    autoComplete,
    autoFocus,
    id,
    onKeyDown,
    onKeyUp,
    name,
    placeholder,
    readOnly,
    type
  };
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : 'div';
  const rootProps = (0, _utils.useSlotProps)({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: [_inputUnstyledClasses.default.root, rootStateClasses, className]
  });
  let Input = (_components$Input = components.Input) != null ? _components$Input : 'input';
  let inputProps = (0, _utils.useSlotProps)({
    elementType: Input,
    getSlotProps: otherHandlers => getInputProps((0, _extends2.default)({}, otherHandlers, propsToForward)),
    externalSlotProps: componentsProps.input,
    ownerState,
    className: [_inputUnstyledClasses.default.input, inputStateClasses]
  });

  if (multiline) {
    var _components$Textarea, _components$Textarea2;

    const hasHostTextarea = (0, _isHostComponent.default)((_components$Textarea = components.Textarea) != null ? _components$Textarea : 'textarea');
    const inputPropsWithoutOwnerState = (0, _objectWithoutPropertiesLoose2.default)(inputProps, _excluded2);

    if (rows) {
      if (false) {}
    }

    inputProps = (0, _extends2.default)({}, !hasHostTextarea && {
      minRows: rows || minRows,
      maxRows: rows || maxRows
    }, hasHostTextarea ? inputPropsWithoutOwnerState : inputProps, {
      type: undefined
    });
    Input = (_components$Textarea2 = components.Textarea) != null ? _components$Textarea2 : 'textarea';
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
    children: [startAdornment, /*#__PURE__*/(0, _jsxRuntime.jsx)(Input, (0, _extends2.default)({}, inputProps)), endAdornment]
  }));
});
 false ? 0 : void 0;
var _default = InputUnstyled;
exports["default"] = _default;

/***/ }),

/***/ 6039:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 47955:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useInput: true,
  inputUnstyledClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _InputUnstyled.default;
  }
}));
Object.defineProperty(exports, "inputUnstyledClasses", ({
  enumerable: true,
  get: function () {
    return _inputUnstyledClasses.default;
  }
}));
Object.defineProperty(exports, "useInput", ({
  enumerable: true,
  get: function () {
    return _useInput.default;
  }
}));

var _InputUnstyled = _interopRequireDefault(__webpack_require__(25075));

var _InputUnstyled2 = __webpack_require__(6039);

Object.keys(_InputUnstyled2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _InputUnstyled2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _InputUnstyled2[key];
    }
  });
});

var _useInput = _interopRequireDefault(__webpack_require__(76640));

var _useInput2 = __webpack_require__(76007);

Object.keys(_useInput2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useInput2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useInput2[key];
    }
  });
});

var _inputUnstyledClasses = _interopRequireWildcard(__webpack_require__(13632));

Object.keys(_inputUnstyledClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _inputUnstyledClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _inputUnstyledClasses[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 13632:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getInputUnstyledUtilityClass = getInputUnstyledUtilityClass;

var _generateUtilityClass = _interopRequireDefault(__webpack_require__(7084));

var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(11469));

function getInputUnstyledUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiInput', slot);
}

const inputBaseClasses = (0, _generateUtilityClasses.default)('MuiInput', ['root', 'formControl', 'focused', 'disabled', 'error', 'multiline', 'input', 'inputMultiline', 'inputTypeSearch', 'adornedStart', 'adornedEnd']);
var _default = inputBaseClasses;
exports["default"] = _default;

/***/ }),

/***/ 76640:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useInput;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _utils = __webpack_require__(77462);

var React = _interopRequireWildcard(__webpack_require__(67294));

var _FormControlUnstyled = __webpack_require__(47735);

var _extractEventHandlers = _interopRequireDefault(__webpack_require__(60389));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useInput(parameters) {
  const {
    defaultValue: defaultValueProp,
    disabled: disabledProp = false,
    error: errorProp = false,
    onBlur,
    onChange,
    onFocus,
    required: requiredProp = false,
    value: valueProp
  } = parameters;
  const formControlContext = (0, _FormControlUnstyled.useFormControlUnstyledContext)();
  let defaultValue;
  let disabled;
  let error;
  let required;
  let value;

  if (formControlContext) {
    var _formControlContext$d, _formControlContext$e, _formControlContext$r;

    defaultValue = undefined;
    disabled = (_formControlContext$d = formControlContext.disabled) != null ? _formControlContext$d : false;
    error = (_formControlContext$e = formControlContext.error) != null ? _formControlContext$e : false;
    required = (_formControlContext$r = formControlContext.required) != null ? _formControlContext$r : false;
    value = formControlContext.value;

    if (false) {}
  } else {
    defaultValue = defaultValueProp;
    disabled = disabledProp;
    error = errorProp;
    required = requiredProp;
    value = valueProp;
  }

  const {
    current: isControlled
  } = React.useRef(value != null);
  const handleInputRefWarning = React.useCallback(instance => {
    if (false) {}
  }, []);
  const inputRef = React.useRef(null);
  const handleInputRef = (0, _utils.unstable_useForkRef)(inputRef, handleInputRefWarning);
  const [focused, setFocused] = React.useState(false); // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.

  React.useEffect(() => {
    if (!formControlContext && disabled && focused) {
      setFocused(false); // @ts-ignore

      onBlur == null ? void 0 : onBlur();
    }
  }, [formControlContext, disabled, focused, onBlur]);

  const handleFocus = otherHandlers => event => {
    var _otherHandlers$onFocu;

    // Fix a bug with IE11 where the focus/blur events are triggered
    // while the component is disabled.
    if (formControlContext != null && formControlContext.disabled) {
      event.stopPropagation();
      return;
    }

    (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);

    if (formControlContext && formControlContext.onFocus) {
      var _formControlContext$o;

      formControlContext == null ? void 0 : (_formControlContext$o = formControlContext.onFocus) == null ? void 0 : _formControlContext$o.call(formControlContext);
    } else {
      setFocused(true);
    }
  };

  const handleBlur = otherHandlers => event => {
    var _otherHandlers$onBlur;

    (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);

    if (formControlContext && formControlContext.onBlur) {
      formControlContext.onBlur();
    } else {
      setFocused(false);
    }
  };

  const handleChange = otherHandlers => (event, ...args) => {
    var _formControlContext$o2, _otherHandlers$onChan;

    if (!isControlled) {
      const element = event.target || inputRef.current;

      if (element == null) {
        throw new Error( false ? 0 : (0, _utils.formatMuiErrorMessage)(17));
      }
    }

    formControlContext == null ? void 0 : (_formControlContext$o2 = formControlContext.onChange) == null ? void 0 : _formControlContext$o2.call(formControlContext, event); // @ts-ignore

    (_otherHandlers$onChan = otherHandlers.onChange) == null ? void 0 : _otherHandlers$onChan.call(otherHandlers, event, ...args);
  };

  const handleClick = otherHandlers => event => {
    var _otherHandlers$onClic;

    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }

    (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
  };

  const getRootProps = (externalProps = {}) => {
    // onBlur, onChange and onFocus are forwarded to the input slot.
    const propsEventHandlers = (0, _extractEventHandlers.default)(parameters, ['onBlur', 'onChange', 'onFocus']);
    const externalEventHandlers = (0, _extends2.default)({}, propsEventHandlers, (0, _extractEventHandlers.default)(externalProps));
    return (0, _extends2.default)({}, externalProps, externalEventHandlers, {
      onClick: handleClick(externalEventHandlers)
    });
  };

  const getInputProps = (externalProps = {}) => {
    const propsEventHandlers = {
      onBlur,
      onChange,
      onFocus
    };
    const externalEventHandlers = (0, _extends2.default)({}, propsEventHandlers, (0, _extractEventHandlers.default)(externalProps));
    const mergedEventHandlers = (0, _extends2.default)({}, externalProps, externalEventHandlers, {
      onBlur: handleBlur(externalEventHandlers),
      onChange: handleChange(externalEventHandlers),
      onFocus: handleFocus(externalEventHandlers)
    });
    return (0, _extends2.default)({}, mergedEventHandlers, {
      'aria-invalid': error || undefined,
      defaultValue: defaultValue,
      ref: handleInputRef,
      value: value,
      required,
      disabled
    });
  };

  return {
    disabled,
    error,
    focused,
    formControlContext,
    getInputProps,
    getRootProps,
    required,
    value
  };
}

/***/ }),

/***/ 76007:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 6178:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = defaultListboxReducer;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _useListbox = __webpack_require__(74555);

const pageSize = 5;

function findValidOptionToHighlight(index, lookupDirection, options, focusDisabled, isOptionDisabled, wrapAround) {
  if (options.length === 0 || options.every((o, i) => isOptionDisabled(o, i))) {
    return -1;
  }

  let nextFocus = index;

  for (;;) {
    // No valid options found
    if (!wrapAround && lookupDirection === 'next' && nextFocus === options.length || !wrapAround && lookupDirection === 'previous' && nextFocus === -1) {
      return -1;
    }

    const nextFocusDisabled = focusDisabled ? false : isOptionDisabled(options[nextFocus], nextFocus);

    if (nextFocusDisabled) {
      nextFocus += lookupDirection === 'next' ? 1 : -1;

      if (wrapAround) {
        nextFocus = (nextFocus + options.length) % options.length;
      }
    } else {
      return nextFocus;
    }
  }
}

function getNewHighlightedOption(options, previouslyHighlightedOption, diff, lookupDirection, highlightDisabled, isOptionDisabled, wrapAround, optionComparer) {
  var _options$nextIndex;

  const maxIndex = options.length - 1;
  const defaultHighlightedIndex = -1;
  let nextIndexCandidate;
  const previouslyHighlightedIndex = previouslyHighlightedOption == null ? -1 : options.findIndex(option => optionComparer(option, previouslyHighlightedOption));

  if (diff === 'reset') {
    var _options$defaultHighl;

    return defaultHighlightedIndex === -1 ? null : (_options$defaultHighl = options[defaultHighlightedIndex]) != null ? _options$defaultHighl : null;
  }

  if (diff === 'start') {
    nextIndexCandidate = 0;
  } else if (diff === 'end') {
    nextIndexCandidate = maxIndex;
  } else {
    const newIndex = previouslyHighlightedIndex + diff;

    if (newIndex < 0) {
      if (!wrapAround && previouslyHighlightedIndex !== -1 || Math.abs(diff) > 1) {
        nextIndexCandidate = 0;
      } else {
        nextIndexCandidate = maxIndex;
      }
    } else if (newIndex > maxIndex) {
      if (!wrapAround || Math.abs(diff) > 1) {
        nextIndexCandidate = maxIndex;
      } else {
        nextIndexCandidate = 0;
      }
    } else {
      nextIndexCandidate = newIndex;
    }
  }

  const nextIndex = findValidOptionToHighlight(nextIndexCandidate, lookupDirection, options, highlightDisabled, isOptionDisabled, wrapAround);
  return (_options$nextIndex = options[nextIndex]) != null ? _options$nextIndex : null;
}

function handleOptionSelection(option, state, props) {
  const {
    multiple,
    optionComparer = (o, v) => o === v,
    isOptionDisabled = () => false
  } = props;
  const {
    selectedValue
  } = state;
  const optionIndex = props.options.indexOf(option);

  if (isOptionDisabled(option, optionIndex)) {
    return state;
  }

  if (multiple) {
    var _ref, _ref2;

    const selectedValues = (_ref = selectedValue) != null ? _ref : []; // if the option is already selected, remove it from the selection, otherwise add it

    const newSelectedValues = selectedValues.some(sv => optionComparer(sv, option)) ? selectedValue.filter(v => !optionComparer(v, option)) : [...((_ref2 = selectedValue) != null ? _ref2 : []), option];
    return {
      selectedValue: newSelectedValues,
      highlightedValue: option
    };
  }

  if (selectedValue != null && optionComparer(option, selectedValue)) {
    return state;
  }

  return {
    selectedValue: option,
    highlightedValue: option
  };
}

function handleKeyDown(event, state, props) {
  const {
    options,
    isOptionDisabled,
    disableListWrap,
    disabledItemsFocusable,
    optionComparer
  } = props;

  const moveHighlight = (diff, direction, wrapAround) => {
    return getNewHighlightedOption(options, state.highlightedValue, diff, direction, disabledItemsFocusable != null ? disabledItemsFocusable : false, isOptionDisabled != null ? isOptionDisabled : () => false, wrapAround, optionComparer);
  };

  switch (event.key) {
    case 'Home':
      return (0, _extends2.default)({}, state, {
        highlightedValue: moveHighlight('start', 'next', false)
      });

    case 'End':
      return (0, _extends2.default)({}, state, {
        highlightedValue: moveHighlight('end', 'previous', false)
      });

    case 'PageUp':
      return (0, _extends2.default)({}, state, {
        highlightedValue: moveHighlight(-pageSize, 'previous', false)
      });

    case 'PageDown':
      return (0, _extends2.default)({}, state, {
        highlightedValue: moveHighlight(pageSize, 'next', false)
      });

    case 'ArrowUp':
      // TODO: extend current selection with Shift modifier
      return (0, _extends2.default)({}, state, {
        highlightedValue: moveHighlight(-1, 'previous', !(disableListWrap != null ? disableListWrap : false))
      });

    case 'ArrowDown':
      // TODO: extend current selection with Shift modifier
      return (0, _extends2.default)({}, state, {
        highlightedValue: moveHighlight(1, 'next', !(disableListWrap != null ? disableListWrap : false))
      });

    case 'Enter':
    case ' ':
      if (state.highlightedValue === null) {
        return state;
      }

      return handleOptionSelection(state.highlightedValue, state, props);

    default:
      break;
  }

  return state;
}

function handleBlur(state) {
  return (0, _extends2.default)({}, state, {
    highlightedValue: null
  });
}

const textCriteriaMatches = (nextFocus, searchString, stringifyOption) => {
  var _stringifyOption;

  const text = (_stringifyOption = stringifyOption(nextFocus)) == null ? void 0 : _stringifyOption.trim().toLowerCase();

  if (!text || text.length === 0) {
    // Make option not navigable if stringification fails or results in empty string.
    return false;
  }

  return text.indexOf(searchString) === 0;
};

function handleTextNavigation(state, searchString, props) {
  const {
    options,
    isOptionDisabled,
    disableListWrap,
    disabledItemsFocusable,
    optionComparer,
    optionStringifier
  } = props;

  const moveHighlight = previouslyHighlightedOption => {
    return getNewHighlightedOption(options, previouslyHighlightedOption, 1, 'next', disabledItemsFocusable != null ? disabledItemsFocusable : false, isOptionDisabled != null ? isOptionDisabled : () => false, !(disableListWrap != null ? disableListWrap : false), optionComparer);
  };

  const startWithCurrentOption = searchString.length > 1;
  let nextOption = startWithCurrentOption ? state.highlightedValue : moveHighlight(state.highlightedValue); // use `for` instead of `while` prevent infinite loop

  for (let index = 0; index < options.length; index += 1) {
    // Return un-mutated state if looped back to the currently highlighted value
    if (!nextOption || !startWithCurrentOption && state.highlightedValue === nextOption) {
      return state;
    }

    if (textCriteriaMatches(nextOption, searchString, optionStringifier) && (!isOptionDisabled(nextOption, options.indexOf(nextOption)) || disabledItemsFocusable)) {
      // The nextOption is the element to be highlighted
      return (0, _extends2.default)({}, state, {
        highlightedValue: nextOption
      });
    } // Move to the next element.


    nextOption = moveHighlight(nextOption);
  } // No option match text search criteria


  return state;
}

function handleOptionsChange(options, previousOptions, state, props) {
  var _options$find, _options$find2;

  const {
    multiple,
    optionComparer
  } = props;
  const newHighlightedOption = state.highlightedValue == null ? null : (_options$find = options.find(option => optionComparer(option, state.highlightedValue))) != null ? _options$find : null;

  if (multiple) {
    var _ref3;

    // exclude selected values that are no longer in the options
    const selectedValues = (_ref3 = state.selectedValue) != null ? _ref3 : [];
    const newSelectedValues = selectedValues.filter(selectedValue => options.some(option => optionComparer(option, selectedValue)));
    return {
      highlightedValue: newHighlightedOption,
      selectedValue: newSelectedValues
    };
  }

  const newSelectedValue = (_options$find2 = options.find(option => optionComparer(option, state.selectedValue))) != null ? _options$find2 : null;
  return {
    highlightedValue: newHighlightedOption,
    selectedValue: newSelectedValue
  };
}

function defaultListboxReducer(state, action) {
  const {
    type
  } = action;

  switch (type) {
    case _useListbox.ActionTypes.keyDown:
      return handleKeyDown(action.event, state, action.props);

    case _useListbox.ActionTypes.optionClick:
      return handleOptionSelection(action.option, state, action.props);

    case _useListbox.ActionTypes.blur:
      return handleBlur(state);

    case _useListbox.ActionTypes.setValue:
      return (0, _extends2.default)({}, state, {
        selectedValue: action.value
      });

    case _useListbox.ActionTypes.setHighlight:
      return (0, _extends2.default)({}, state, {
        highlightedValue: action.highlight
      });

    case _useListbox.ActionTypes.textNavigation:
      return handleTextNavigation(state, action.searchString, action.props);

    case _useListbox.ActionTypes.optionsChange:
      return handleOptionsChange(action.options, action.previousOptions, state, action.props);

    default:
      return state;
  }
}

/***/ }),

/***/ 31642:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useListbox: true,
  defaultListboxReducer: true
};
Object.defineProperty(exports, "defaultListboxReducer", ({
  enumerable: true,
  get: function () {
    return _defaultListboxReducer.default;
  }
}));
Object.defineProperty(exports, "useListbox", ({
  enumerable: true,
  get: function () {
    return _useListbox.default;
  }
}));

var _useListbox = _interopRequireDefault(__webpack_require__(95521));

var _defaultListboxReducer = _interopRequireDefault(__webpack_require__(6178));

var _useListbox2 = __webpack_require__(74555);

Object.keys(_useListbox2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useListbox2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useListbox2[key];
    }
  });
});

/***/ }),

/***/ 74810:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useControllableReducer;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _utils = __webpack_require__(77462);

var _useListbox = __webpack_require__(74555);

var _areArraysEqual = _interopRequireDefault(__webpack_require__(29090));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Triggers change event handlers when reducer returns changed state.
 */
function useReducerReturnValueHandler(state, value, options, optionComparer, setValueState, onValueChange, onHighlightChange) {
  const valueRef = React.useRef(value);
  valueRef.current = value;
  const onValueChangeRef = React.useRef(onValueChange);
  React.useEffect(() => {
    onValueChangeRef.current = onValueChange;
  }, [onValueChange]);
  const onHighlightChangeRef = React.useRef(onHighlightChange);
  React.useEffect(() => {
    onHighlightChangeRef.current = onHighlightChange;
  }, [onHighlightChange]);
  React.useEffect(() => {
    if (Array.isArray(state.selectedValue)) {
      if ((0, _areArraysEqual.default)(state.selectedValue, valueRef.current)) {
        return;
      }
    } else if (state.selectedValue == null && valueRef.current == null || state.selectedValue != null && valueRef.current != null && optionComparer.current(state.selectedValue, valueRef.current)) {
      return;
    }

    setValueState(state.selectedValue);

    if (state.selectedValue != null) {
      var _onValueChangeRef$cur;

      // @ts-ignore We know that selectedValue has the correct type depending on `selectMultiple` prop.
      (_onValueChangeRef$cur = onValueChangeRef.current) == null ? void 0 : _onValueChangeRef$cur.call(onValueChangeRef, state.selectedValue);
    }
  }, [state.selectedValue, setValueState, optionComparer]);
  React.useEffect(() => {
    var _onHighlightChangeRef;

    // Fire the highlightChange event when reducer returns changed `highlightedIndex`.
    (_onHighlightChangeRef = onHighlightChangeRef.current) == null ? void 0 : _onHighlightChangeRef.call(onHighlightChangeRef, state.highlightedValue);
  }, [state.highlightedValue]);
}

function useControllableReducer(internalReducer, externalReducer, props) {
  const {
    value: controlledValue,
    defaultValue,
    onChange: onValueChange,
    onHighlightChange,
    options,
    optionComparer
  } = props;
  const propsRef = React.useRef(props);
  propsRef.current = props;
  const [value, setValueState] = (0, _utils.unstable_useControlled)({
    controlled: controlledValue,
    default: defaultValue,
    name: 'useListbox'
  });
  const previousValueRef = React.useRef(null);
  const [state, dispatch] = React.useReducer(externalReducer != null ? externalReducer : internalReducer, {
    highlightedValue: null,
    selectedValue: value
  });
  const optionComparerRef = React.useRef(optionComparer);
  optionComparerRef.current = optionComparer;
  React.useEffect(() => {
    // Detect external changes to the controlled `value` prop and update the state.
    if (controlledValue === undefined) {
      return;
    }

    if (Array.isArray(controlledValue) && Array.isArray(previousValueRef.current) && (0, _areArraysEqual.default)(previousValueRef.current, controlledValue, optionComparerRef.current)) {
      // `value` is an array and it did not change.
      return;
    }

    if (!Array.isArray(controlledValue) && controlledValue != null && previousValueRef.current != null && optionComparerRef.current(controlledValue, previousValueRef.current)) {
      // `value` is a single option and it did not change.
      return;
    }

    previousValueRef.current = controlledValue;
    dispatch({
      type: _useListbox.ActionTypes.setValue,
      value: controlledValue
    });
  }, [controlledValue]);
  useReducerReturnValueHandler(state, value, options, optionComparerRef, setValueState, onValueChange, onHighlightChange);
  return [state, dispatch];
}

/***/ }),

/***/ 95521:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useListbox;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _utils = __webpack_require__(77462);

var _useListbox = __webpack_require__(74555);

var _defaultListboxReducer = _interopRequireDefault(__webpack_require__(6178));

var _useControllableReducer = _interopRequireDefault(__webpack_require__(74810));

var _areArraysEqual = _interopRequireDefault(__webpack_require__(29090));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TEXT_NAVIGATION_RESET_TIMEOUT = 500; // milliseconds

const defaultOptionComparer = (optionA, optionB) => optionA === optionB;

const defaultIsOptionDisabled = () => false;

const defaultOptionStringifier = option => typeof option === 'string' ? option : String(option);

function useListbox(props) {
  var _props$optionIdGenera, _options$highlightedI;

  const {
    disabledItemsFocusable = false,
    disableListWrap = false,
    focusManagement = 'activeDescendant',
    id: idProp,
    isOptionDisabled = defaultIsOptionDisabled,
    listboxRef: externalListboxRef,
    multiple = false,
    optionComparer = defaultOptionComparer,
    optionStringifier = defaultOptionStringifier,
    options,
    stateReducer: externalReducer
  } = props;
  const id = (0, _utils.unstable_useId)(idProp);

  function defaultIdGenerator(_, index) {
    return `${id}-option-${index}`;
  }

  const optionIdGenerator = (_props$optionIdGenera = props.optionIdGenerator) != null ? _props$optionIdGenera : defaultIdGenerator;
  const propsWithDefaults = (0, _extends2.default)({}, props, {
    disabledItemsFocusable,
    disableListWrap,
    focusManagement,
    isOptionDisabled,
    multiple,
    optionComparer,
    optionStringifier
  });
  const listboxRef = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(externalListboxRef, listboxRef);
  const textCriteriaRef = React.useRef({
    searchString: '',
    lastTime: null
  });
  const [{
    highlightedValue,
    selectedValue
  }, dispatch] = (0, _useControllableReducer.default)(_defaultListboxReducer.default, externalReducer, propsWithDefaults);
  const highlightedIndex = React.useMemo(() => {
    return highlightedValue == null ? -1 : options.findIndex(option => optionComparer(option, highlightedValue));
  }, [highlightedValue, options, optionComparer]);
  const previousOptions = React.useRef([]);
  React.useEffect(() => {
    if ((0, _areArraysEqual.default)(previousOptions.current, options, optionComparer)) {
      return;
    }

    dispatch({
      type: _useListbox.ActionTypes.optionsChange,
      options,
      previousOptions: previousOptions.current,
      props: propsWithDefaults
    });
    previousOptions.current = options; // No need to re-run this effect if props change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, optionComparer, dispatch]);
  const setSelectedValue = React.useCallback(option => {
    dispatch({
      type: _useListbox.ActionTypes.setValue,
      value: option
    });
  }, [dispatch]);
  const setHighlightedValue = React.useCallback(option => {
    dispatch({
      type: _useListbox.ActionTypes.setHighlight,
      highlight: option
    });
  }, [dispatch]);

  const createHandleOptionClick = (option, other) => event => {
    var _other$onClick;

    (_other$onClick = other.onClick) == null ? void 0 : _other$onClick.call(other, event);

    if (event.defaultPrevented) {
      return;
    }

    event.preventDefault();
    dispatch({
      type: _useListbox.ActionTypes.optionClick,
      option,
      event,
      props: propsWithDefaults
    });
  };

  const createHandleOptionMouseOver = (option, other) => event => {
    var _other$onMouseOver;

    (_other$onMouseOver = other.onMouseOver) == null ? void 0 : _other$onMouseOver.call(other, event);

    if (event.defaultPrevented) {
      return;
    }

    dispatch({
      type: _useListbox.ActionTypes.optionHover,
      option,
      event,
      props: propsWithDefaults
    });
  };

  const createHandleKeyDown = other => event => {
    var _other$onKeyDown;

    (_other$onKeyDown = other.onKeyDown) == null ? void 0 : _other$onKeyDown.call(other, event);

    if (event.defaultPrevented) {
      return;
    }

    const keysToPreventDefault = ['ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown'];

    if (focusManagement === 'activeDescendant') {
      // When the child element is focused using the activeDescendant attribute,
      // the listbox handles keyboard events on its behalf.
      // We have to `preventDefault()` is this case to prevent the browser from
      // scrolling the view when space is pressed or submitting forms when enter is pressed.
      keysToPreventDefault.push(' ', 'Enter');
    }

    if (keysToPreventDefault.includes(event.key)) {
      event.preventDefault();
    }

    dispatch({
      type: _useListbox.ActionTypes.keyDown,
      event,
      props: propsWithDefaults
    }); // Handle text navigation

    if (event.key.length === 1) {
      const textCriteria = textCriteriaRef.current;
      const lowerKey = event.key.toLowerCase();
      const currentTime = performance.now();

      if (textCriteria.searchString.length > 0 && textCriteria.lastTime && currentTime - textCriteria.lastTime > TEXT_NAVIGATION_RESET_TIMEOUT) {
        textCriteria.searchString = lowerKey;
      } else if (textCriteria.searchString.length !== 1 || lowerKey !== textCriteria.searchString) {
        // If there is just one character in the buffer and the key is the same, do not append
        textCriteria.searchString += lowerKey;
      }

      textCriteria.lastTime = currentTime;
      dispatch({
        type: _useListbox.ActionTypes.textNavigation,
        searchString: textCriteria.searchString,
        props: propsWithDefaults
      });
    }
  };

  const createHandleBlur = other => event => {
    var _other$onBlur, _listboxRef$current;

    (_other$onBlur = other.onBlur) == null ? void 0 : _other$onBlur.call(other, event);

    if (event.defaultPrevented) {
      return;
    }

    if ((_listboxRef$current = listboxRef.current) != null && _listboxRef$current.contains(document.activeElement)) {
      // focus is within the listbox
      return;
    }

    dispatch({
      type: _useListbox.ActionTypes.blur,
      event,
      props: propsWithDefaults
    });
  };

  const getRootProps = (otherHandlers = {}) => {
    return (0, _extends2.default)({}, otherHandlers, {
      'aria-activedescendant': focusManagement === 'activeDescendant' && highlightedValue != null ? optionIdGenerator(highlightedValue, highlightedIndex) : undefined,
      id,
      onBlur: createHandleBlur(otherHandlers),
      onKeyDown: createHandleKeyDown(otherHandlers),
      role: 'listbox',
      tabIndex: focusManagement === 'DOM' ? -1 : 0,
      ref: handleRef
    });
  };

  const getOptionState = option => {
    let selected;
    const index = options.findIndex(opt => optionComparer(opt, option));

    if (multiple) {
      var _ref;

      selected = ((_ref = selectedValue) != null ? _ref : []).some(value => value != null && optionComparer(option, value));
    } else {
      selected = optionComparer(option, selectedValue);
    }

    const disabled = isOptionDisabled(option, index);
    return {
      selected,
      disabled,
      highlighted: highlightedIndex === index
    };
  };

  const getOptionTabIndex = optionState => {
    if (focusManagement === 'activeDescendant') {
      return undefined;
    }

    if (!optionState.highlighted) {
      return -1;
    }

    if (optionState.disabled && !disabledItemsFocusable) {
      return -1;
    }

    return 0;
  };

  const getOptionProps = (option, otherHandlers = {}) => {
    const optionState = getOptionState(option);
    const index = options.findIndex(opt => optionComparer(opt, option));
    return (0, _extends2.default)({}, otherHandlers, {
      'aria-disabled': optionState.disabled || undefined,
      'aria-selected': optionState.selected,
      tabIndex: getOptionTabIndex(optionState),
      id: optionIdGenerator(option, index),
      onClick: createHandleOptionClick(option, otherHandlers),
      onMouseOver: createHandleOptionMouseOver(option, otherHandlers),
      role: 'option'
    });
  };

  React.useDebugValue({
    highlightedOption: options[highlightedIndex],
    selectedOption: selectedValue
  });
  return {
    getRootProps,
    getOptionProps,
    getOptionState,
    highlightedOption: (_options$highlightedI = options[highlightedIndex]) != null ? _options$highlightedI : null,
    selectedOption: selectedValue,
    setSelectedValue,
    setHighlightedValue
  };
}

/***/ }),

/***/ 74555:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ActionTypes = void 0;
var ActionTypes; // split declaration and export due to https://github.com/codesandbox/codesandbox-client/issues/6435

exports.ActionTypes = ActionTypes;

(function (ActionTypes) {
  ActionTypes["blur"] = "blur";
  ActionTypes["focus"] = "focus";
  ActionTypes["keyDown"] = "keyDown";
  ActionTypes["optionClick"] = "optionClick";
  ActionTypes["optionHover"] = "optionHover";
  ActionTypes["optionsChange"] = "optionsChange";
  ActionTypes["setValue"] = "setValue";
  ActionTypes["setHighlight"] = "setHighlight";
  ActionTypes["textNavigation"] = "textNagivation";
})(ActionTypes || (exports.ActionTypes = ActionTypes = {}));

/***/ }),

/***/ 17098:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _menuItemUnstyledClasses = __webpack_require__(88560);

var _useMenuItem = _interopRequireDefault(__webpack_require__(54939));

var _composeClasses = _interopRequireDefault(__webpack_require__(36630));

var _useSlotProps = _interopRequireDefault(__webpack_require__(72679));

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["children", "disabled", "component", "components", "componentsProps", "label"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getUtilityClasses(ownerState) {
  const {
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
  };
  return (0, _composeClasses.default)(slots, _menuItemUnstyledClasses.getMenuItemUnstyledUtilityClass, {});
}
/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base/react-menu/)
 *
 * API:
 *
 * - [MenuItemUnstyled API](https://mui.com/base/api/menu-item-unstyled/)
 */


const MenuItemUnstyled = /*#__PURE__*/React.forwardRef(function MenuItemUnstyled(props, ref) {
  var _ref;

  const {
    children,
    disabled: disabledProp = false,
    component,
    components = {},
    componentsProps = {},
    label
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    getRootProps,
    disabled,
    focusVisible
  } = (0, _useMenuItem.default)({
    disabled: disabledProp,
    ref,
    label
  });
  const ownerState = (0, _extends2.default)({}, props, {
    disabled,
    focusVisible
  });
  const classes = getUtilityClasses(ownerState);
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : 'li';
  const rootProps = (0, _useSlotProps.default)({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    className: classes.root,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps, {
    children: children
  }));
});
 false ? 0 : void 0;
var _default = MenuItemUnstyled;
exports["default"] = _default;

/***/ }),

/***/ 26821:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 81730:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  menuItemUnstyledClasses: true,
  useMenuItem: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _MenuItemUnstyled.default;
  }
}));
Object.defineProperty(exports, "menuItemUnstyledClasses", ({
  enumerable: true,
  get: function () {
    return _menuItemUnstyledClasses.default;
  }
}));
Object.defineProperty(exports, "useMenuItem", ({
  enumerable: true,
  get: function () {
    return _useMenuItem.default;
  }
}));

var _MenuItemUnstyled = _interopRequireDefault(__webpack_require__(17098));

var _MenuItemUnstyled2 = __webpack_require__(26821);

Object.keys(_MenuItemUnstyled2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MenuItemUnstyled2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MenuItemUnstyled2[key];
    }
  });
});

var _menuItemUnstyledClasses = _interopRequireWildcard(__webpack_require__(88560));

Object.keys(_menuItemUnstyledClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _menuItemUnstyledClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _menuItemUnstyledClasses[key];
    }
  });
});

var _useMenuItem = _interopRequireDefault(__webpack_require__(54939));

var _useMenuItem2 = __webpack_require__(22762);

Object.keys(_useMenuItem2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useMenuItem2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useMenuItem2[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 88560:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getMenuItemUnstyledUtilityClass = getMenuItemUnstyledUtilityClass;

var _generateUtilityClass = _interopRequireDefault(__webpack_require__(7084));

var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(11469));

function getMenuItemUnstyledUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiMenuItemUnstyled', slot);
}

const menuItemUnstyledClasses = (0, _generateUtilityClasses.default)('MuiMenuItemUnstyled', ['root', 'disabled', 'focusVisible']);
var _default = menuItemUnstyledClasses;
exports["default"] = _default;

/***/ }),

/***/ 54939:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useMenuItem;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _utils = __webpack_require__(77462);

var _MenuUnstyled = __webpack_require__(31565);

var _ButtonUnstyled = __webpack_require__(64651);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useMenuItem(props) {
  var _itemState$disabled;

  const {
    disabled = false,
    ref,
    label
  } = props;
  const id = (0, _utils.unstable_useId)();
  const menuContext = React.useContext(_MenuUnstyled.MenuUnstyledContext);
  const itemRef = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(itemRef, ref);

  if (menuContext === null) {
    throw new Error('MenuItemUnstyled must be used within a MenuUnstyled');
  }

  const {
    registerItem,
    unregisterItem,
    open
  } = menuContext;
  React.useEffect(() => {
    if (id === undefined) {
      return undefined;
    }

    registerItem(id, {
      disabled,
      id,
      ref: itemRef,
      label
    });
    return () => unregisterItem(id);
  }, [id, registerItem, unregisterItem, disabled, ref, label]);
  const {
    getRootProps: getButtonProps,
    focusVisible
  } = (0, _ButtonUnstyled.useButton)({
    disabled,
    focusableWhenDisabled: true,
    ref: handleRef
  }); // Ensure the menu item is focused when highlighted

  const [focusRequested, requestFocus] = React.useState(false);
  const focusIfRequested = React.useCallback(() => {
    if (focusRequested && itemRef.current != null) {
      itemRef.current.focus();
      requestFocus(false);
    }
  }, [focusRequested]);
  React.useEffect(() => {
    focusIfRequested();
  });
  React.useDebugValue({
    id,
    disabled,
    label
  });
  const itemState = menuContext.getItemState(id != null ? id : '');
  const {
    highlighted
  } = itemState != null ? itemState : {
    highlighted: false
  };
  React.useEffect(() => {
    requestFocus(highlighted && open);
  }, [highlighted, open]);

  if (id === undefined) {
    return {
      getRootProps: other => (0, _extends2.default)({}, other, getButtonProps(other), {
        role: 'menuitem'
      }),
      disabled: false,
      focusVisible
    };
  }

  return {
    getRootProps: other => {
      const optionProps = menuContext.getItemProps(id, other);
      return (0, _extends2.default)({}, other, getButtonProps(other), {
        tabIndex: optionProps.tabIndex,
        id: optionProps.id,
        role: 'menuitem'
      });
    },
    disabled: (_itemState$disabled = itemState == null ? void 0 : itemState.disabled) != null ? _itemState$disabled : false,
    focusVisible
  };
}

/***/ }),

/***/ 22762:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 56211:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _utils = __webpack_require__(77462);

var _MenuUnstyledContext = _interopRequireDefault(__webpack_require__(10708));

var _menuUnstyledClasses = __webpack_require__(54326);

var _useMenu = _interopRequireDefault(__webpack_require__(98742));

var _composeClasses = _interopRequireDefault(__webpack_require__(36630));

var _PopperUnstyled = _interopRequireDefault(__webpack_require__(45264));

var _useSlotProps = _interopRequireDefault(__webpack_require__(72679));

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["actions", "anchorEl", "children", "component", "components", "componentsProps", "keepMounted", "listboxId", "onClose", "open"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getUtilityClasses(ownerState) {
  const {
    open
  } = ownerState;
  const slots = {
    root: ['root', open && 'expanded'],
    listbox: ['listbox', open && 'expanded']
  };
  return (0, _composeClasses.default)(slots, _menuUnstyledClasses.getMenuUnstyledUtilityClass, {});
}
/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base/react-menu/)
 *
 * API:
 *
 * - [MenuUnstyled API](https://mui.com/base/api/menu-unstyled/)
 */


const MenuUnstyled = /*#__PURE__*/React.forwardRef(function MenuUnstyled(props, forwardedRef) {
  var _ref, _components$Listbox;

  const {
    actions,
    anchorEl,
    children,
    component,
    components = {},
    componentsProps = {},
    keepMounted = false,
    listboxId,
    onClose,
    open = false
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    registerItem,
    unregisterItem,
    getListboxProps,
    getItemProps,
    getItemState,
    highlightFirstItem,
    highlightLastItem
  } = (0, _useMenu.default)({
    open,
    onClose,
    listboxId
  });
  React.useImperativeHandle(actions, () => ({
    highlightFirstItem,
    highlightLastItem
  }), [highlightFirstItem, highlightLastItem]);
  const ownerState = (0, _extends2.default)({}, props, {
    open
  });
  const classes = getUtilityClasses(ownerState);
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : _PopperUnstyled.default;
  const rootProps = (0, _useSlotProps.default)({
    elementType: Root,
    externalForwardedProps: other,
    externalSlotProps: componentsProps.root,
    additionalProps: {
      anchorEl,
      open,
      keepMounted,
      role: undefined,
      ref: forwardedRef
    },
    className: classes.root,
    ownerState
  });
  const Listbox = (_components$Listbox = components.Listbox) != null ? _components$Listbox : 'ul';
  const listboxProps = (0, _useSlotProps.default)({
    elementType: Listbox,
    getSlotProps: getListboxProps,
    externalSlotProps: componentsProps.listbox,
    ownerState,
    className: classes.listbox
  });
  const contextValue = {
    registerItem,
    unregisterItem,
    getItemState,
    getItemProps,
    open
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Listbox, (0, _extends2.default)({}, listboxProps, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuUnstyledContext.default.Provider, {
        value: contextValue,
        children: children
      })
    }))
  }));
});
 false ? 0 : void 0;
var _default = MenuUnstyled;
exports["default"] = _default;

/***/ }),

/***/ 62013:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 10708:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const MenuUnstyledContext = /*#__PURE__*/React.createContext(null);
MenuUnstyledContext.displayName = 'MenuUnstyledContext';
var _default = MenuUnstyledContext;
exports["default"] = _default;

/***/ }),

/***/ 31565:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  MenuUnstyledContext: true,
  menuUnstyledClasses: true,
  useMenu: true
};
Object.defineProperty(exports, "MenuUnstyledContext", ({
  enumerable: true,
  get: function () {
    return _MenuUnstyledContext.default;
  }
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _MenuUnstyled.default;
  }
}));
Object.defineProperty(exports, "menuUnstyledClasses", ({
  enumerable: true,
  get: function () {
    return _menuUnstyledClasses.default;
  }
}));
Object.defineProperty(exports, "useMenu", ({
  enumerable: true,
  get: function () {
    return _useMenu.default;
  }
}));

var _MenuUnstyled = _interopRequireDefault(__webpack_require__(56211));

var _MenuUnstyledContext = _interopRequireWildcard(__webpack_require__(10708));

Object.keys(_MenuUnstyledContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MenuUnstyledContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MenuUnstyledContext[key];
    }
  });
});

var _menuUnstyledClasses = _interopRequireWildcard(__webpack_require__(54326));

Object.keys(_menuUnstyledClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _menuUnstyledClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _menuUnstyledClasses[key];
    }
  });
});

var _MenuUnstyled2 = __webpack_require__(62013);

Object.keys(_MenuUnstyled2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MenuUnstyled2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MenuUnstyled2[key];
    }
  });
});

var _useMenu = _interopRequireDefault(__webpack_require__(98742));

var _useMenu2 = __webpack_require__(11682);

Object.keys(_useMenu2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useMenu2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useMenu2[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 54326:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getMenuUnstyledUtilityClass = getMenuUnstyledUtilityClass;

var _generateUtilityClass = _interopRequireDefault(__webpack_require__(7084));

var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(11469));

function getMenuUnstyledUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiMenuUnstyled', slot);
}

const menuUnstyledClasses = (0, _generateUtilityClasses.default)('MuiMenuUnstyled', ['root', 'listbox', 'expanded']);
var _default = menuUnstyledClasses;
exports["default"] = _default;

/***/ }),

/***/ 98742:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useMenu;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _utils = __webpack_require__(77462);

var _ListboxUnstyled = __webpack_require__(31642);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function stateReducer(state, action) {
  if (action.type === _ListboxUnstyled.ActionTypes.blur || action.type === _ListboxUnstyled.ActionTypes.optionHover || action.type === _ListboxUnstyled.ActionTypes.setValue) {
    return state;
  }

  const newState = (0, _ListboxUnstyled.defaultListboxReducer)(state, action);

  if (action.type !== _ListboxUnstyled.ActionTypes.setHighlight && newState.highlightedValue === null && action.props.options.length > 0) {
    return (0, _extends2.default)({}, newState, {
      highlightedValue: action.props.options[0]
    });
  }

  return newState;
}

function useMenu(parameters = {}) {
  const {
    listboxRef: listboxRefProp,
    open = false,
    onClose,
    listboxId
  } = parameters;
  const [menuItems, setMenuItems] = React.useState({});
  const listboxRef = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(listboxRef, listboxRefProp);
  const registerItem = React.useCallback((id, metadata) => {
    setMenuItems(previousState => {
      const newState = (0, _extends2.default)({}, previousState);
      newState[id] = metadata;
      return newState;
    });
  }, []);
  const unregisterItem = React.useCallback(id => {
    setMenuItems(previousState => {
      const newState = (0, _extends2.default)({}, previousState);
      delete newState[id];
      return newState;
    });
  }, []);
  const {
    getOptionState,
    getOptionProps,
    getRootProps,
    highlightedOption,
    setHighlightedValue: setListboxHighlight
  } = (0, _ListboxUnstyled.useListbox)({
    options: Object.keys(menuItems),
    optionStringifier: id => {
      var _menuItems$id$ref$cur;

      return menuItems[id].label || ((_menuItems$id$ref$cur = menuItems[id].ref.current) == null ? void 0 : _menuItems$id$ref$cur.innerText);
    },
    isOptionDisabled: id => {
      var _menuItems$id;

      return (menuItems == null ? void 0 : (_menuItems$id = menuItems[id]) == null ? void 0 : _menuItems$id.disabled) || false;
    },
    listboxRef: handleRef,
    focusManagement: 'DOM',
    id: listboxId,
    stateReducer,
    disabledItemsFocusable: true
  });
  const highlightFirstItem = React.useCallback(() => {
    if (Object.keys(menuItems).length > 0) {
      setListboxHighlight(menuItems[Object.keys(menuItems)[0]].id);
    }
  }, [menuItems, setListboxHighlight]);
  const highlightLastItem = React.useCallback(() => {
    if (Object.keys(menuItems).length > 0) {
      setListboxHighlight(menuItems[Object.keys(menuItems)[Object.keys(menuItems).length - 1]].id);
    }
  }, [menuItems, setListboxHighlight]);
  React.useEffect(() => {
    if (!open) {
      highlightFirstItem();
    }
  }, [open, highlightFirstItem]);

  const createHandleKeyDown = otherHandlers => e => {
    var _otherHandlers$onKeyD;

    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null ? void 0 : _otherHandlers$onKeyD.call(otherHandlers, e);

    if (e.defaultPrevented) {
      return;
    }

    if (e.key === 'Escape' && open) {
      onClose == null ? void 0 : onClose();
    }
  };

  const createHandleBlur = otherHandlers => e => {
    var _otherHandlers$onBlur, _listboxRef$current;

    (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, e);

    if (!((_listboxRef$current = listboxRef.current) != null && _listboxRef$current.contains(e.relatedTarget))) {
      onClose == null ? void 0 : onClose();
    }
  };

  React.useEffect(() => {
    var _listboxRef$current2;

    // set focus to the highlighted item (but prevent stealing focus from other elements on the page)
    if ((_listboxRef$current2 = listboxRef.current) != null && _listboxRef$current2.contains(document.activeElement) && highlightedOption !== null) {
      var _menuItems$highlighte, _menuItems$highlighte2;

      menuItems == null ? void 0 : (_menuItems$highlighte = menuItems[highlightedOption]) == null ? void 0 : (_menuItems$highlighte2 = _menuItems$highlighte.ref.current) == null ? void 0 : _menuItems$highlighte2.focus();
    }
  }, [highlightedOption, menuItems]);

  const getListboxProps = (otherHandlers = {}) => {
    const rootProps = getRootProps((0, _extends2.default)({}, otherHandlers, {
      onBlur: createHandleBlur(otherHandlers),
      onKeyDown: createHandleKeyDown(otherHandlers)
    }));
    return (0, _extends2.default)({}, otherHandlers, rootProps, {
      role: 'menu'
    });
  };

  const getItemState = id => {
    const {
      disabled,
      highlighted
    } = getOptionState(id);
    return {
      disabled,
      highlighted
    };
  };

  React.useDebugValue({
    menuItems,
    highlightedOption
  });
  return {
    registerItem,
    unregisterItem,
    menuItems,
    getListboxProps,
    getItemState,
    getItemProps: getOptionProps,
    highlightedOption,
    highlightFirstItem,
    highlightLastItem
  };
}

/***/ }),

/***/ 11682:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 21691:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ariaHidden = ariaHidden;
exports["default"] = void 0;

var _utils = __webpack_require__(77462);

// Is a vertical scrollbar displayed?
function isOverflowing(container) {
  const doc = (0, _utils.unstable_ownerDocument)(container);

  if (doc.body === container) {
    return (0, _utils.unstable_ownerWindow)(container).innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

function ariaHidden(element, show) {
  if (show) {
    element.setAttribute('aria-hidden', 'true');
  } else {
    element.removeAttribute('aria-hidden');
  }
}

function getPaddingRight(element) {
  return parseInt((0, _utils.unstable_ownerWindow)(element).getComputedStyle(element).paddingRight, 10) || 0;
}

function isAriaHiddenForbiddenOnElement(element) {
  // The forbidden HTML tags are the ones from ARIA specification that
  // can be children of body and can't have aria-hidden attribute.
  // cf. https://www.w3.org/TR/html-aria/#docconformance
  const forbiddenTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE', 'LINK', 'MAP', 'META', 'NOSCRIPT', 'PICTURE', 'COL', 'COLGROUP', 'PARAM', 'SLOT', 'SOURCE', 'TRACK'];
  const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
  const isInputHidden = element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';
  return isForbiddenTagName || isInputHidden;
}

function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude = [], show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, element => {
    const isNotExcludedElement = blacklist.indexOf(element) === -1;
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);

    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, show);
    }
  });
}

function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
}

function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;

  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      const scrollbarSize = (0, _utils.unstable_getScrollbarSize)((0, _utils.unstable_ownerDocument)(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: 'padding-right',
        el: container
      }); // Use computed style, here to get the real padding to add our scrollbar width.

      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`; // .mui-fixed is a global helper.

      const fixedElements = (0, _utils.unstable_ownerDocument)(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedElements, element => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: 'padding-right',
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }

    let scrollContainer;

    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = (0, _utils.unstable_ownerDocument)(container).body;
    } else {
      // Improve Gatsby support
      // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
      const parent = container.parentElement;
      const containerWindow = (0, _utils.unstable_ownerWindow)(container);
      scrollContainer = (parent == null ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container;
    } // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.


    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: 'overflow',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: 'overflow-x',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: 'overflow-y',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }

  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };

  return restore;
}

function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, element => {
    if (element.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}

/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */
class ModalManager {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }

  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);

    if (modalIndex !== -1) {
      return modalIndex;
    }

    modalIndex = this.modals.length;
    this.modals.push(modal); // If the modal we are adding is already in the DOM.

    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }

    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, item => item.container === container);

    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }

    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }

  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];

    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }

  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);

    if (modalIndex === -1) {
      return modalIndex;
    }

    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }

      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, ariaHiddenState);
      }

      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
      // aria-hidden because the dom element doesn't exist either
      // when modal was unmounted before modalRef gets null

      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }

    return modalIndex;
  }

  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }

}

exports["default"] = ModalManager;

/***/ }),

/***/ 51056:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _clsx = _interopRequireDefault(__webpack_require__(57966));

var _utils = __webpack_require__(77462);

var _composeClasses = _interopRequireDefault(__webpack_require__(36630));

var _appendOwnerState = _interopRequireDefault(__webpack_require__(69182));

var _Portal = _interopRequireDefault(__webpack_require__(62418));

var _ModalManager = _interopRequireWildcard(__webpack_require__(21691));

var _TrapFocus = _interopRequireDefault(__webpack_require__(17042));

var _modalUnstyledClasses = __webpack_require__(39474);

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["children", "classes", "className", "closeAfterTransition", "component", "components", "componentsProps", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    open,
    exited,
    classes
  } = ownerState;
  const slots = {
    root: ['root', !open && exited && 'hidden']
  };
  return (0, _composeClasses.default)(slots, _modalUnstyledClasses.getModalUtilityClass, classes);
};

function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
} // A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.


const defaultManager = new _ModalManager.default();
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/material-ui/api/dialog/)
 * - [Drawer](/material-ui/api/drawer/)
 * - [Menu](/material-ui/api/menu/)
 * - [Popover](/material-ui/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/material-ui/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

const ModalUnstyled = /*#__PURE__*/React.forwardRef(function ModalUnstyled(props, ref) {
  var _props$ariaHidden, _componentsProps$root;

  const {
    children,
    classes: classesProp,
    className,
    closeAfterTransition = false,
    component = 'div',
    components = {},
    componentsProps = {},
    container,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    // private
    // eslint-disable-next-line react/prop-types
    manager = defaultManager,
    onBackdropClick,
    onClose,
    onKeyDown,
    open,

    /* eslint-disable react/prop-types */
    onTransitionEnter,
    onTransitionExited
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const [exited, setExited] = React.useState(true);
  const modal = React.useRef({});
  const mountNodeRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(modalRef, ref);
  const hasTransition = getHasTransition(props);
  const ariaHiddenProp = (_props$ariaHidden = props['aria-hidden']) != null ? _props$ariaHidden : true;

  const getDoc = () => (0, _utils.unstable_ownerDocument)(mountNodeRef.current);

  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };

  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    }); // Fix a bug on Chrome where the scroll isn't initially 0.

    modalRef.current.scrollTop = 0;
  };

  const handleOpen = (0, _utils.unstable_useEventCallback)(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer); // The element was already mounted.

    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = React.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = (0, _utils.unstable_useEventCallback)(node => {
    mountNodeRef.current = node;

    if (!node) {
      return;
    }

    if (open && isTopModal()) {
      handleMounted();
    } else {
      (0, _ModalManager.ariaHidden)(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = React.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [manager, ariaHiddenProp]);
  React.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  React.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const ownerState = (0, _extends2.default)({}, props, {
    classes: classesProp,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    exited,
    hideBackdrop,
    keepMounted
  });
  const classes = useUtilityClasses(ownerState);

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  const handleEnter = () => {
    setExited(false);

    if (onTransitionEnter) {
      onTransitionEnter();
    }
  };

  const handleExited = () => {
    setExited(true);

    if (onTransitionExited) {
      onTransitionExited();
    }

    if (closeAfterTransition) {
      handleClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };

  const handleKeyDown = event => {
    if (onKeyDown) {
      onKeyDown(event);
    } // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.


    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }

    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();

      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };

  const childProps = {};

  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = '-1';
  } // It's a Transition like component


  if (hasTransition) {
    childProps.onEnter = (0, _utils.unstable_createChainedFunction)(handleEnter, children.props.onEnter);
    childProps.onExited = (0, _utils.unstable_createChainedFunction)(handleExited, children.props.onExited);
  }

  const Root = components.Root || component;
  const rootProps = (0, _appendOwnerState.default)(Root, (0, _extends2.default)({
    role: 'presentation'
  }, other, componentsProps.root, {
    ref: handleRef,
    onKeyDown: handleKeyDown,
    className: (0, _clsx.default)(classes.root, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, className)
  }), ownerState);
  const BackdropComponent = components.Backdrop;
  const backdropProps = (0, _appendOwnerState.default)(BackdropComponent, (0, _extends2.default)({
    'aria-hidden': true,
    open,
    onClick: handleBackdropClick
  }, componentsProps.backdrop), ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Portal.default, {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
      children: [!hideBackdrop && BackdropComponent ? /*#__PURE__*/(0, _jsxRuntime.jsx)(BackdropComponent, (0, _extends2.default)({}, backdropProps)) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_TrapFocus.default, {
        disableEnforceFocus: disableEnforceFocus,
        disableAutoFocus: disableAutoFocus,
        disableRestoreFocus: disableRestoreFocus,
        isEnabled: isTopModal,
        open: open,
        children: /*#__PURE__*/React.cloneElement(children, childProps)
      })]
    }))
  });
});
 false ? 0 : void 0;
var _default = ModalUnstyled;
exports["default"] = _default;

/***/ }),

/***/ 60381:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "ModalManager", ({
  enumerable: true,
  get: function () {
    return _ModalManager.default;
  }
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _ModalUnstyled.default;
  }
}));
Object.defineProperty(exports, "getModalUtilityClass", ({
  enumerable: true,
  get: function () {
    return _modalUnstyledClasses.getModalUtilityClass;
  }
}));
Object.defineProperty(exports, "modalUnstyledClasses", ({
  enumerable: true,
  get: function () {
    return _modalUnstyledClasses.default;
  }
}));

var _ModalUnstyled = _interopRequireDefault(__webpack_require__(51056));

var _ModalManager = _interopRequireDefault(__webpack_require__(21691));

var _modalUnstyledClasses = _interopRequireWildcard(__webpack_require__(39474));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 39474:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getModalUtilityClass = getModalUtilityClass;

var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(11469));

var _generateUtilityClass = _interopRequireDefault(__webpack_require__(7084));

function getModalUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiModal', slot);
}

const modalUnstyledClasses = (0, _generateUtilityClasses.default)('MuiModal', ['root', 'hidden']);
var _default = modalUnstyledClasses;
exports["default"] = _default;

/***/ }),

/***/ 29775:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _clsx = _interopRequireDefault(__webpack_require__(57966));

var _utils = __webpack_require__(77462);

var _utils2 = __webpack_require__(93333);

var _useSelect = _interopRequireDefault(__webpack_require__(22410));

var _utils3 = __webpack_require__(6443);

var _PopperUnstyled = _interopRequireDefault(__webpack_require__(45264));

var _SelectUnstyledContext = __webpack_require__(45779);

var _composeClasses = _interopRequireDefault(__webpack_require__(36630));

var _selectUnstyledClasses = __webpack_require__(31576);

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["autoFocus", "children", "className", "component", "components", "componentsProps", "defaultListboxOpen", "defaultValue", "disabled", "listboxOpen", "onChange", "onListboxOpenChange", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function defaultRenderMultipleValues(selectedOptions) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(React.Fragment, {
    children: selectedOptions.map(o => o.label).join(', ')
  });
}

function useUtilityClasses(ownerState) {
  const {
    active,
    disabled,
    open,
    focusVisible
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', active && 'active', open && 'expanded'],
    listbox: ['listbox', disabled && 'disabled'],
    popper: ['popper']
  };
  return (0, _composeClasses.default)(slots, _selectUnstyledClasses.getSelectUnstyledUtilityClass, {});
}
/**
 * The foundation for building custom-styled multi-selection select components.
 */


const MultiSelectUnstyled = /*#__PURE__*/React.forwardRef(function MultiSelectUnstyled(props, ref) {
  var _props$renderValue, _ref, _components$Listbox, _components$Popper, _componentsProps$list, _componentsProps$list2, _componentsProps$root, _componentsProps$list3, _componentsProps$popp;

  const {
    autoFocus,
    children,
    className,
    component,
    components = {},
    componentsProps = {},
    defaultListboxOpen = false,
    defaultValue = [],
    disabled: disabledProp,
    listboxOpen: listboxOpenProp,
    onChange,
    onListboxOpenChange,
    value: valueProp
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const renderValue = (_props$renderValue = props.renderValue) != null ? _props$renderValue : defaultRenderMultipleValues;
  const [groupedOptions, setGroupedOptions] = React.useState([]);
  const options = React.useMemo(() => (0, _utils2.flattenOptionGroups)(groupedOptions), [groupedOptions]);
  const [listboxOpen, setListboxOpen] = (0, _utils.unstable_useControlled)({
    controlled: listboxOpenProp,
    default: defaultListboxOpen,
    name: 'MultiSelectUnstyled',
    state: 'listboxOpen'
  });
  React.useEffect(() => {
    setGroupedOptions((0, _utils2.getOptionsFromChildren)(children));
  }, [children]);
  const [buttonDefined, setButtonDefined] = React.useState(false);
  const buttonRef = React.useRef(null);
  const listboxRef = React.useRef(null);
  const Button = (_ref = component != null ? component : components.Root) != null ? _ref : 'button';
  const ListboxRoot = (_components$Listbox = components.Listbox) != null ? _components$Listbox : 'ul';
  const Popper = (_components$Popper = components.Popper) != null ? _components$Popper : _PopperUnstyled.default;

  const handleButtonRefChange = element => {
    buttonRef.current = element;

    if (element != null) {
      setButtonDefined(true);
    }
  };

  const handleButtonRef = (0, _utils.unstable_useForkRef)(ref, handleButtonRefChange);
  const handleListboxRef = (0, _utils.unstable_useForkRef)(listboxRef, (_componentsProps$list = componentsProps.listbox) == null ? void 0 : _componentsProps$list.ref);
  React.useEffect(() => {
    if (autoFocus) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);

  const handleOpenChange = isOpen => {
    setListboxOpen(isOpen);
    onListboxOpenChange == null ? void 0 : onListboxOpenChange(isOpen);
  };

  const {
    buttonActive,
    buttonFocusVisible,
    disabled,
    getButtonProps,
    getListboxProps,
    getOptionProps,
    getOptionState,
    value
  } = (0, _useSelect.default)({
    buttonRef: handleButtonRef,
    defaultValue,
    disabled: disabledProp,
    listboxId: (_componentsProps$list2 = componentsProps.listbox) == null ? void 0 : _componentsProps$list2.id,
    listboxRef: handleListboxRef,
    multiple: true,
    onChange,
    onOpenChange: handleOpenChange,
    open: listboxOpen,
    options,
    value: valueProp
  });
  const ownerState = (0, _extends2.default)({}, props, {
    active: buttonActive,
    defaultListboxOpen,
    disabled,
    focusVisible: buttonFocusVisible,
    open: listboxOpen,
    renderValue,
    value
  });
  const classes = useUtilityClasses(ownerState);
  const selectedOptions = React.useMemo(() => {
    if (value == null) {
      return [];
    }

    return options.filter(o => value.includes(o.value));
  }, [options, value]);
  const buttonProps = (0, _utils3.appendOwnerState)(Button, (0, _extends2.default)({}, getButtonProps(), other, componentsProps.root, {
    className: (0, _clsx.default)(className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, classes.root)
  }), ownerState);
  const listboxProps = (0, _utils3.appendOwnerState)(ListboxRoot, (0, _extends2.default)({}, getListboxProps(), componentsProps.listbox, {
    className: (0, _clsx.default)((_componentsProps$list3 = componentsProps.listbox) == null ? void 0 : _componentsProps$list3.className, classes.listbox)
  }), ownerState); // Popper must be a (non-host) component, therefore ownerState will be present within the props

  const popperProps = (0, _utils3.appendOwnerState)(Popper, (0, _extends2.default)({
    open: listboxOpen,
    anchorEl: buttonRef.current,
    placement: 'bottom-start',
    disablePortal: true,
    role: undefined
  }, componentsProps.popper, {
    className: (0, _clsx.default)((_componentsProps$popp = componentsProps.popper) == null ? void 0 : _componentsProps$popp.className, classes.popper)
  }), ownerState);
  const context = {
    getOptionProps,
    getOptionState,
    listboxRef
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Button, (0, _extends2.default)({}, buttonProps, {
      children: renderValue(selectedOptions)
    })), buttonDefined && /*#__PURE__*/(0, _jsxRuntime.jsx)(Popper, (0, _extends2.default)({}, popperProps, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ListboxRoot, (0, _extends2.default)({}, listboxProps, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectUnstyledContext.SelectUnstyledContext.Provider, {
          value: context,
          children: children
        })
      }))
    }))]
  });
});
 false ? 0 : void 0;
/**
 * The foundation for building custom-styled multi-selection select components.
 *
 * Demos:
 *
 * - [Select](https://mui.com/base/react-select/)
 *
 * API:
 *
 * - [MultiSelectUnstyled API](https://mui.com/base/api/multi-select-unstyled/)
 */

var _default = MultiSelectUnstyled;
exports["default"] = _default;

/***/ }),

/***/ 7470:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 76816:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _MultiSelectUnstyled.default;
  }
}));

var _MultiSelectUnstyled = _interopRequireDefault(__webpack_require__(29775));

var _MultiSelectUnstyled2 = __webpack_require__(7470);

Object.keys(_MultiSelectUnstyled2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MultiSelectUnstyled2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MultiSelectUnstyled2[key];
    }
  });
});

/***/ }),

/***/ 32514:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _utils = __webpack_require__(77462);

var _jsxRuntime = __webpack_require__(85893);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * NoSsr purposely removes components from the subject of Server Side Rendering (SSR).
 *
 * This component can be useful in a variety of situations:
 * - Escape hatch for broken dependencies not supporting SSR.
 * - Improve the time-to-first paint on the client by only rendering above the fold.
 * - Reduce the rendering time on the server.
 * - Under too heavy server load, you can turn on service degradation.
 */
function NoSsr(props) {
  const {
    children,
    defer = false,
    fallback = null
  } = props;
  const [mountedState, setMountedState] = React.useState(false);
  (0, _utils.unstable_useEnhancedEffect)(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);
  React.useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]); // We need the Fragment here to force react-docgen to recognise NoSsr as a component.

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(React.Fragment, {
    children: mountedState ? children : fallback
  });
}

 false ? 0 : void 0;

if (false) {}

var _default = NoSsr;
exports["default"] = _default;

/***/ }),

/***/ 41369:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _NoSsr.default;
  }
}));

var _NoSsr = _interopRequireDefault(__webpack_require__(32514));

/***/ }),

/***/ 33864:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var _clsx = _interopRequireDefault(__webpack_require__(57966));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _composeClasses = _interopRequireDefault(__webpack_require__(36630));

var _optionGroupUnstyledClasses = __webpack_require__(12411);

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["className", "component", "components", "disabled", "componentsProps"];

function useUtilityClasses(disabled) {
  const slots = {
    root: ['root', disabled && 'disabled'],
    label: ['label'],
    list: ['list']
  };
  return (0, _composeClasses.default)(slots, _optionGroupUnstyledClasses.getOptionGroupUnstyledUtilityClass, {});
}
/**
 * An unstyled option group to be used within a SelectUnstyled.
 *
 * Demos:
 *
 * - [Select](https://mui.com/base/react-select/)
 *
 * API:
 *
 * - [OptionGroupUnstyled API](https://mui.com/base/api/option-group-unstyled/)
 */


const OptionGroupUnstyled = /*#__PURE__*/_react.default.forwardRef(function OptionGroupUnstyled(props, ref) {
  var _componentsProps$root, _componentsProps$labe, _componentsProps$list;

  const {
    className,
    component,
    components = {},
    disabled = false,
    componentsProps = {}
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const Root = component || (components == null ? void 0 : components.Root) || 'li';
  const Label = (components == null ? void 0 : components.Label) || 'span';
  const List = (components == null ? void 0 : components.List) || 'ul';
  const classes = useUtilityClasses(disabled);
  const rootProps = (0, _extends2.default)({}, other, {
    ref
  }, componentsProps.root, {
    className: (0, _clsx.default)(classes.root, className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className)
  });
  const labelProps = (0, _extends2.default)({}, componentsProps.label, {
    className: (0, _clsx.default)(classes.label, (_componentsProps$labe = componentsProps.label) == null ? void 0 : _componentsProps$labe.className)
  });
  const listProps = (0, _extends2.default)({}, componentsProps.list, {
    className: (0, _clsx.default)(classes.list, (_componentsProps$list = componentsProps.list) == null ? void 0 : _componentsProps$list.className)
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Label, (0, _extends2.default)({}, labelProps, {
      children: props.label
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(List, (0, _extends2.default)({}, listProps, {
      children: props.children
    }))]
  }));
});

 false ? 0 : void 0;
var _default = OptionGroupUnstyled;
exports["default"] = _default;

/***/ }),

/***/ 92111:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 22349:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  optionGroupUnstyledClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _OptionGroupUnstyled.default;
  }
}));
Object.defineProperty(exports, "optionGroupUnstyledClasses", ({
  enumerable: true,
  get: function () {
    return _optionGroupUnstyledClasses.default;
  }
}));

var _OptionGroupUnstyled = _interopRequireDefault(__webpack_require__(33864));

var _OptionGroupUnstyled2 = __webpack_require__(92111);

Object.keys(_OptionGroupUnstyled2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _OptionGroupUnstyled2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _OptionGroupUnstyled2[key];
    }
  });
});

var _optionGroupUnstyledClasses = _interopRequireWildcard(__webpack_require__(12411));

Object.keys(_optionGroupUnstyledClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _optionGroupUnstyledClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _optionGroupUnstyledClasses[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 12411:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getOptionGroupUnstyledUtilityClass = getOptionGroupUnstyledUtilityClass;

var _generateUtilityClass = _interopRequireDefault(__webpack_require__(7084));

var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(11469));

function getOptionGroupUnstyledUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiOptionGroupUnstyled', slot);
}

const optionGroupUnstyledClasses = (0, _generateUtilityClasses.default)('MuiOptionGroupUnstyled', ['root', 'label', 'list']);
var _default = optionGroupUnstyledClasses;
exports["default"] = _default;

/***/ }),

/***/ 92398:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _clsx = _interopRequireDefault(__webpack_require__(57966));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _utils = __webpack_require__(77462);

var _composeClasses = _interopRequireDefault(__webpack_require__(36630));

var _SelectUnstyledContext = __webpack_require__(45779);

var _optionUnstyledClasses = __webpack_require__(74465);

var _appendOwnerState = _interopRequireDefault(__webpack_require__(69182));

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["children", "className", "component", "components", "componentsProps", "disabled", "value", "label"];

function useUtilityClasses(ownerState) {
  const {
    disabled,
    highlighted,
    selected
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', highlighted && 'highlighted', selected && 'selected']
  };
  return (0, _composeClasses.default)(slots, _optionUnstyledClasses.getOptionUnstyledUtilityClass, {});
}
/**
 * An unstyled option to be used within a SelectUnstyled.
 */


const OptionUnstyled = /*#__PURE__*/_react.default.forwardRef(function OptionUnstyled(props, ref) {
  var _componentsProps$root;

  const {
    children,
    className,
    component,
    components = {},
    componentsProps = {},
    disabled,
    value,
    label
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);

  const selectContext = _react.default.useContext(_SelectUnstyledContext.SelectUnstyledContext);

  if (!selectContext) {
    throw new Error('OptionUnstyled must be used within a SelectUnstyled');
  }

  const Root = component || components.Root || 'li';
  const selectOption = {
    value,
    label: label || children,
    disabled
  };
  const optionState = selectContext.getOptionState(selectOption);
  const optionProps = selectContext.getOptionProps(selectOption);
  const listboxRef = selectContext.listboxRef;
  const ownerState = (0, _extends2.default)({}, props, optionState);

  const optionRef = _react.default.useRef(null);

  const handleRef = (0, _utils.unstable_useForkRef)(ref, optionRef);

  _react.default.useEffect(() => {
    // Scroll to the currently highlighted option
    if (optionState.highlighted) {
      if (!listboxRef.current || !optionRef.current) {
        return;
      }

      const listboxClientRect = listboxRef.current.getBoundingClientRect();
      const optionClientRect = optionRef.current.getBoundingClientRect();

      if (optionClientRect.top < listboxClientRect.top) {
        listboxRef.current.scrollTop -= listboxClientRect.top - optionClientRect.top;
      } else if (optionClientRect.bottom > listboxClientRect.bottom) {
        listboxRef.current.scrollTop += optionClientRect.bottom - listboxClientRect.bottom;
      }
    }
  }, [optionState.highlighted, listboxRef]);

  const classes = useUtilityClasses(ownerState);
  const rootProps = (0, _appendOwnerState.default)(Root, (0, _extends2.default)({}, other, optionProps, componentsProps.root, {
    ref: handleRef,
    className: (0, _clsx.default)(classes.root, className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className)
  }), ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps, {
    children: children
  }));
});

 false ? 0 : void 0;
/**
 * An unstyled option to be used within a SelectUnstyled.
 *
 * Demos:
 *
 * - [Select](https://mui.com/base/react-select/)
 *
 * API:
 *
 * - [OptionUnstyled API](https://mui.com/base/api/option-unstyled/)
 */

var _default = /*#__PURE__*/_react.default.memo(OptionUnstyled);

exports["default"] = _default;

/***/ }),

/***/ 83760:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 50450:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  optionUnstyledClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _OptionUnstyled.default;
  }
}));
Object.defineProperty(exports, "optionUnstyledClasses", ({
  enumerable: true,
  get: function () {
    return _optionUnstyledClasses.default;
  }
}));

var _OptionUnstyled = _interopRequireDefault(__webpack_require__(92398));

var _OptionUnstyled2 = __webpack_require__(83760);

Object.keys(_OptionUnstyled2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _OptionUnstyled2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _OptionUnstyled2[key];
    }
  });
});

var _optionUnstyledClasses = _interopRequireWildcard(__webpack_require__(74465));

Object.keys(_optionUnstyledClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _optionUnstyledClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _optionUnstyledClasses[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 74465:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getOptionUnstyledUtilityClass = getOptionUnstyledUtilityClass;

var _generateUtilityClass = _interopRequireDefault(__webpack_require__(7084));

var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(11469));

function getOptionUnstyledUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiOptionUnstyled', slot);
}

const optionUnstyledClasses = (0, _generateUtilityClasses.default)('MuiOptionUnstyled', ['root', 'disabled', 'selected', 'highlighted']);
var _default = optionUnstyledClasses;
exports["default"] = _default;

/***/ }),

/***/ 43968:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var _utils = __webpack_require__(77462);

var _core = __webpack_require__(516);

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _Portal = _interopRequireDefault(__webpack_require__(62418));

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "ownerState", "placement", "popperOptions", "popperRef", "TransitionProps"],
      _excluded2 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function flipPlacement(placement, direction) {
  if (direction === 'ltr') {
    return placement;
  }

  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';

    case 'bottom-start':
      return 'bottom-end';

    case 'top-end':
      return 'top-start';

    case 'top-start':
      return 'top-end';

    default:
      return placement;
  }
}

function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

const defaultPopperOptions = {};
/* eslint-disable react/prop-types */

const PopperTooltip = /*#__PURE__*/React.forwardRef(function PopperTooltip(props, ref) {
  const {
    anchorEl,
    children,
    direction,
    disablePortal,
    modifiers,
    open,
    placement: initialPlacement,
    popperOptions,
    popperRef: popperRefProp,
    TransitionProps
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const tooltipRef = React.useRef(null);
  const ownRef = (0, _utils.unstable_useForkRef)(tooltipRef, ref);
  const popperRef = React.useRef(null);
  const handlePopperRef = (0, _utils.unstable_useForkRef)(popperRef, popperRefProp);
  const handlePopperRefRef = React.useRef(handlePopperRef);
  (0, _utils.unstable_useEnhancedEffect)(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  React.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const rtlPlacement = flipPlacement(initialPlacement, direction);
  /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */

  const [placement, setPlacement] = React.useState(rtlPlacement);
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  (0, _utils.unstable_useEnhancedEffect)(() => {
    if (!anchorEl || !open) {
      return undefined;
    }

    const handlePopperUpdate = data => {
      setPlacement(data.placement);
    };

    const resolvedAnchorEl = resolveAnchorEl(anchorEl);

    if (false) {}

    let popperModifiers = [{
      name: 'preventOverflow',
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: 'flip',
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: 'onUpdate',
      enabled: true,
      phase: 'afterWrite',
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];

    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }

    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }

    const popper = (0, _core.createPopper)(resolveAnchorEl(anchorEl), tooltipRef.current, (0, _extends2.default)({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: popperModifiers
    }));
    handlePopperRefRef.current(popper);
    return () => {
      popper.destroy();
      handlePopperRefRef.current(null);
    };
  }, [anchorEl, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  const childProps = {
    placement
  };

  if (TransitionProps !== null) {
    childProps.TransitionProps = TransitionProps;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2.default)({
    ref: ownRef,
    role: "tooltip"
  }, other, {
    children: typeof children === 'function' ? children(childProps) : children
  }));
});
/* eslint-enable react/prop-types */

/**
 * Poppers rely on the 3rd party library [Popper.js](https://popper.js.org/docs/v2/) for positioning.
 */

const PopperUnstyled = /*#__PURE__*/React.forwardRef(function PopperUnstyled(props, ref) {
  const {
    anchorEl,
    children,
    container: containerProp,
    direction = 'ltr',
    disablePortal = false,
    keepMounted = false,
    modifiers,
    open,
    placement = 'bottom',
    popperOptions = defaultPopperOptions,
    popperRef,
    style,
    transition = false
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded2);
  const [exited, setExited] = React.useState(true);

  const handleEnter = () => {
    setExited(false);
  };

  const handleExited = () => {
    setExited(true);
  };

  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  } // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container


  const container = containerProp || (anchorEl ? (0, _utils.unstable_ownerDocument)(resolveAnchorEl(anchorEl)).body : undefined);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Portal.default, {
    disablePortal: disablePortal,
    container: container,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(PopperTooltip, (0, _extends2.default)({
      anchorEl: anchorEl,
      direction: direction,
      disablePortal: disablePortal,
      modifiers: modifiers,
      ref: ref,
      open: transition ? !exited : open,
      placement: placement,
      popperOptions: popperOptions,
      popperRef: popperRef
    }, other, {
      style: (0, _extends2.default)({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: 'fixed',
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: !open && keepMounted && (!transition || exited) ? 'none' : null
      }, style),
      TransitionProps: transition ? {
        in: open,
        onEnter: handleEnter,
        onExited: handleExited
      } : null,
      children: children
    }))
  });
});
 false ? 0 : void 0;
var _default = PopperUnstyled;
exports["default"] = _default;

/***/ }),

/***/ 45264:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _PopperUnstyled.default;
  }
}));

var _PopperUnstyled = _interopRequireDefault(__webpack_require__(43968));

/***/ }),

/***/ 80687:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var ReactDOM = _interopRequireWildcard(__webpack_require__(73935));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _utils = __webpack_require__(77462);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */


const Portal = /*#__PURE__*/React.forwardRef(function Portal(props, ref) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = React.useState(null);
  const handleRef = (0, _utils.unstable_useForkRef)( /*#__PURE__*/React.isValidElement(children) ? children.ref : null, ref);
  (0, _utils.unstable_useEnhancedEffect)(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  (0, _utils.unstable_useEnhancedEffect)(() => {
    if (mountNode && !disablePortal) {
      (0, _utils.unstable_setRef)(ref, mountNode);
      return () => {
        (0, _utils.unstable_setRef)(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);

  if (disablePortal) {
    if ( /*#__PURE__*/React.isValidElement(children)) {
      return /*#__PURE__*/React.cloneElement(children, {
        ref: handleRef
      });
    }

    return children;
  }

  return mountNode ? /*#__PURE__*/ReactDOM.createPortal(children, mountNode) : mountNode;
});
 false ? 0 : void 0;

if (false) {}

var _default = Portal;
exports["default"] = _default;

/***/ }),

/***/ 62418:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _Portal.default;
  }
}));

var _Portal = _interopRequireDefault(__webpack_require__(80687));

/***/ }),

/***/ 16212:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _clsx = _interopRequireDefault(__webpack_require__(57966));

var _utils = __webpack_require__(77462);

var _utils2 = __webpack_require__(93333);

var _useSelect = _interopRequireDefault(__webpack_require__(22410));

var _utils3 = __webpack_require__(6443);

var _PopperUnstyled = _interopRequireDefault(__webpack_require__(45264));

var _SelectUnstyledContext = __webpack_require__(45779);

var _composeClasses = _interopRequireDefault(__webpack_require__(36630));

var _selectUnstyledClasses = __webpack_require__(31576);

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["autoFocus", "children", "className", "component", "components", "componentsProps", "defaultValue", "defaultListboxOpen", "disabled", "listboxOpen", "onChange", "onListboxOpenChange", "renderValue", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function defaultRenderSingleValue(selectedOption) {
  var _selectedOption$label;

  return (_selectedOption$label = selectedOption == null ? void 0 : selectedOption.label) != null ? _selectedOption$label : '';
}

function useUtilityClasses(ownerState) {
  const {
    active,
    disabled,
    open,
    focusVisible
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', active && 'active', open && 'expanded'],
    listbox: ['listbox', disabled && 'disabled'],
    popper: ['popper']
  };
  return (0, _composeClasses.default)(slots, _selectUnstyledClasses.getSelectUnstyledUtilityClass, {});
}
/**
 * The foundation for building custom-styled select components.
 */


const SelectUnstyled = /*#__PURE__*/React.forwardRef(function SelectUnstyled(props, ref) {
  var _ref, _components$Listbox, _components$Popper, _componentsProps$list, _componentsProps$list2, _componentsProps$root, _componentsProps$list3, _componentsProps$popp;

  const {
    autoFocus,
    children,
    className,
    component,
    components = {},
    componentsProps = {},
    defaultValue,
    defaultListboxOpen = false,
    disabled: disabledProp,
    listboxOpen: listboxOpenProp,
    onChange,
    onListboxOpenChange,
    renderValue: renderValueProp,
    value: valueProp
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const renderValue = renderValueProp != null ? renderValueProp : defaultRenderSingleValue;
  const [groupedOptions, setGroupedOptions] = React.useState([]);
  const options = React.useMemo(() => (0, _utils2.flattenOptionGroups)(groupedOptions), [groupedOptions]);
  const [listboxOpen, setListboxOpen] = (0, _utils.unstable_useControlled)({
    controlled: listboxOpenProp,
    default: defaultListboxOpen,
    name: 'SelectUnstyled',
    state: 'listboxOpen'
  });
  React.useEffect(() => {
    setGroupedOptions((0, _utils2.getOptionsFromChildren)(children));
  }, [children]);
  const [buttonDefined, setButtonDefined] = React.useState(false);
  const buttonRef = React.useRef(null);
  const listboxRef = React.useRef(null);
  const Button = (_ref = component != null ? component : components.Root) != null ? _ref : 'button';
  const ListboxRoot = (_components$Listbox = components.Listbox) != null ? _components$Listbox : 'ul';
  const Popper = (_components$Popper = components.Popper) != null ? _components$Popper : _PopperUnstyled.default;

  const handleButtonRefChange = element => {
    buttonRef.current = element;

    if (element != null) {
      setButtonDefined(true);
    }
  };

  const handleButtonRef = (0, _utils.unstable_useForkRef)(ref, handleButtonRefChange);
  const handleListboxRef = (0, _utils.unstable_useForkRef)(listboxRef, (_componentsProps$list = componentsProps.listbox) == null ? void 0 : _componentsProps$list.ref);
  React.useEffect(() => {
    if (autoFocus) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);

  const handleOpenChange = isOpen => {
    setListboxOpen(isOpen);
    onListboxOpenChange == null ? void 0 : onListboxOpenChange(isOpen);
  };

  const {
    buttonActive,
    buttonFocusVisible,
    disabled,
    getButtonProps,
    getListboxProps,
    getOptionProps,
    getOptionState,
    value
  } = (0, _useSelect.default)({
    buttonRef: handleButtonRef,
    defaultValue,
    disabled: disabledProp,
    listboxId: (_componentsProps$list2 = componentsProps.listbox) == null ? void 0 : _componentsProps$list2.id,
    listboxRef: handleListboxRef,
    multiple: false,
    onChange,
    onOpenChange: handleOpenChange,
    open: listboxOpen,
    options,
    value: valueProp
  });
  const ownerState = (0, _extends2.default)({}, props, {
    active: buttonActive,
    defaultListboxOpen,
    disabled,
    focusVisible: buttonFocusVisible,
    open: listboxOpen,
    renderValue,
    value
  });
  const classes = useUtilityClasses(ownerState);
  const selectedOptions = React.useMemo(() => {
    return options.find(o => value === o.value);
  }, [options, value]);
  const buttonProps = (0, _utils3.appendOwnerState)(Button, (0, _extends2.default)({}, getButtonProps(), other, componentsProps.root, {
    className: (0, _clsx.default)(className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, classes.root)
  }), ownerState);
  const listboxProps = (0, _utils3.appendOwnerState)(ListboxRoot, (0, _extends2.default)({}, getListboxProps(), componentsProps.listbox, {
    className: (0, _clsx.default)((_componentsProps$list3 = componentsProps.listbox) == null ? void 0 : _componentsProps$list3.className, classes.listbox)
  }), ownerState); // Popper must be a (non-host) component, therefore ownerState will be present within the props

  const popperProps = (0, _utils3.appendOwnerState)(Popper, (0, _extends2.default)({
    open: listboxOpen,
    anchorEl: buttonRef.current,
    placement: 'bottom-start',
    disablePortal: true,
    role: undefined
  }, componentsProps.popper, {
    className: (0, _clsx.default)((_componentsProps$popp = componentsProps.popper) == null ? void 0 : _componentsProps$popp.className, classes.popper)
  }), ownerState);
  const context = {
    getOptionProps,
    getOptionState,
    listboxRef
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Button, (0, _extends2.default)({}, buttonProps, {
      children: renderValue(selectedOptions)
    })), buttonDefined && /*#__PURE__*/(0, _jsxRuntime.jsx)(Popper, (0, _extends2.default)({}, popperProps, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ListboxRoot, (0, _extends2.default)({}, listboxProps, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectUnstyledContext.SelectUnstyledContext.Provider, {
          value: context,
          children: children
        })
      }))
    }))]
  });
});
 false ? 0 : void 0;
/**
 * The foundation for building custom-styled select components.
 *
 * Demos:
 *
 * - [Select](https://mui.com/base/react-select/)
 *
 * API:
 *
 * - [SelectUnstyled API](https://mui.com/base/api/select-unstyled/)
 */

var _default = SelectUnstyled;
exports["default"] = _default;

/***/ }),

/***/ 85265:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 45779:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SelectUnstyledContext = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SelectUnstyledContext = /*#__PURE__*/React.createContext(undefined);
exports.SelectUnstyledContext = SelectUnstyledContext;

/***/ }),

/***/ 41776:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  selectUnstyledClasses: true,
  useSelect: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _SelectUnstyled.default;
  }
}));
Object.defineProperty(exports, "selectUnstyledClasses", ({
  enumerable: true,
  get: function () {
    return _selectUnstyledClasses.default;
  }
}));
Object.defineProperty(exports, "useSelect", ({
  enumerable: true,
  get: function () {
    return _useSelect.default;
  }
}));

var _SelectUnstyled = _interopRequireDefault(__webpack_require__(16212));

var _SelectUnstyledContext = __webpack_require__(45779);

Object.keys(_SelectUnstyledContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _SelectUnstyledContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SelectUnstyledContext[key];
    }
  });
});

var _selectUnstyledClasses = _interopRequireWildcard(__webpack_require__(31576));

Object.keys(_selectUnstyledClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _selectUnstyledClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _selectUnstyledClasses[key];
    }
  });
});

var _SelectUnstyled2 = __webpack_require__(85265);

Object.keys(_SelectUnstyled2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _SelectUnstyled2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SelectUnstyled2[key];
    }
  });
});

var _useSelect = _interopRequireDefault(__webpack_require__(22410));

var _useSelect2 = __webpack_require__(50693);

Object.keys(_useSelect2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useSelect2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useSelect2[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 31576:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getSelectUnstyledUtilityClass = getSelectUnstyledUtilityClass;

var _generateUtilityClass = _interopRequireDefault(__webpack_require__(7084));

var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(11469));

function getSelectUnstyledUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiSelectUnstyled', slot);
}

const selectUnstyledClasses = (0, _generateUtilityClasses.default)('MuiSelectUnstyled', ['root', 'button', 'listbox', 'popper', 'active', 'expanded', 'disabled', 'focusVisible']);
var _default = selectUnstyledClasses;
exports["default"] = _default;

/***/ }),

/***/ 22410:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _utils = __webpack_require__(77462);

var _ButtonUnstyled = __webpack_require__(64651);

var _ListboxUnstyled = __webpack_require__(31642);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const defaultOptionStringifier = option => {
  const {
    label,
    value
  } = option;

  if (typeof label === 'string') {
    return label;
  }

  if (typeof value === 'string') {
    return value;
  } // Fall back string representation


  return String(option);
};

function useSelect(props) {
  const {
    buttonRef: buttonRefProp,
    defaultValue,
    disabled = false,
    listboxId,
    listboxRef: listboxRefProp,
    multiple = false,
    onChange,
    onOpenChange,
    open = false,
    options,
    optionStringifier = defaultOptionStringifier,
    value: valueProp
  } = props;
  const buttonRef = React.useRef(null);
  const handleButtonRef = (0, _utils.unstable_useForkRef)(buttonRefProp, buttonRef);
  const listboxRef = React.useRef(null);
  const intermediaryListboxRef = (0, _utils.unstable_useForkRef)(listboxRefProp, listboxRef);
  const [value, setValue] = (0, _utils.unstable_useControlled)({
    controlled: valueProp,
    default: defaultValue,
    name: 'SelectUnstyled',
    state: 'value'
  }); // prevents closing the listbox on keyUp right after opening it

  const ignoreEnterKeyUp = React.useRef(false); // prevents reopening the listbox when button is clicked
  // (listbox closes on lost focus, then immediately reopens on click)

  const ignoreClick = React.useRef(false); // Ensure the listbox is focused after opening

  const [listboxFocusRequested, requestListboxFocus] = React.useState(false);
  const focusListboxIfRequested = React.useCallback(() => {
    if (listboxFocusRequested && listboxRef.current != null) {
      listboxRef.current.focus();
      requestListboxFocus(false);
    }
  }, [listboxFocusRequested]);

  const updateListboxRef = listboxElement => {
    listboxRef.current = listboxElement;
    focusListboxIfRequested();
  };

  const handleListboxRef = (0, _utils.unstable_useForkRef)(intermediaryListboxRef, updateListboxRef);
  React.useEffect(() => {
    focusListboxIfRequested();
  }, [focusListboxIfRequested]);
  React.useEffect(() => {
    requestListboxFocus(open);
  }, [open]);

  const createHandleMouseDown = otherHandlers => event => {
    var _otherHandlers$onMous;

    otherHandlers == null ? void 0 : (_otherHandlers$onMous = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);

    if (!event.defaultPrevented && open) {
      ignoreClick.current = true;
    }
  };

  const createHandleButtonClick = otherHandlers => event => {
    var _otherHandlers$onClic;

    otherHandlers == null ? void 0 : (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);

    if (!event.defaultPrevented && !ignoreClick.current) {
      onOpenChange == null ? void 0 : onOpenChange(!open);
    }

    ignoreClick.current = false;
  };

  const createHandleButtonKeyDown = otherHandlers => event => {
    var _otherHandlers$onKeyD;

    otherHandlers == null ? void 0 : (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null ? void 0 : _otherHandlers$onKeyD.call(otherHandlers, event);

    if (event.defaultPrevented) {
      return;
    }

    if (event.key === 'Enter') {
      ignoreEnterKeyUp.current = true;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      onOpenChange == null ? void 0 : onOpenChange(true);
    }
  };

  const createHandleListboxKeyUp = otherHandlers => event => {
    var _otherHandlers$onKeyU;

    otherHandlers == null ? void 0 : (_otherHandlers$onKeyU = otherHandlers.onKeyUp) == null ? void 0 : _otherHandlers$onKeyU.call(otherHandlers, event);

    if (event.defaultPrevented) {
      return;
    }

    const closingKeys = multiple ? ['Escape'] : ['Escape', 'Enter', ' '];

    if (open && !ignoreEnterKeyUp.current && closingKeys.includes(event.key)) {
      var _buttonRef$current;

      buttonRef == null ? void 0 : (_buttonRef$current = buttonRef.current) == null ? void 0 : _buttonRef$current.focus();
    }

    ignoreEnterKeyUp.current = false;
  };

  const createHandleListboxItemClick = otherHandlers => event => {
    var _otherHandlers$onClic2;

    otherHandlers == null ? void 0 : (_otherHandlers$onClic2 = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic2.call(otherHandlers, event);

    if (event.defaultPrevented) {
      return;
    }

    if (!multiple) {
      onOpenChange == null ? void 0 : onOpenChange(false);
    }
  };

  const createHandleListboxBlur = otherHandlers => event => {
    var _otherHandlers$blur;

    otherHandlers == null ? void 0 : (_otherHandlers$blur = otherHandlers.blur) == null ? void 0 : _otherHandlers$blur.call(otherHandlers, event);

    if (!event.defaultPrevented) {
      onOpenChange == null ? void 0 : onOpenChange(false);
    }
  };

  const listboxReducer = (state, action) => {
    const newState = (0, _ListboxUnstyled.defaultListboxReducer)(state, action); // change selection when listbox is closed

    if (action.type === _ListboxUnstyled.ActionTypes.keyDown && !open && (action.event.key === 'ArrowUp' || action.event.key === 'ArrowDown')) {
      return (0, _extends2.default)({}, newState, {
        selectedValue: newState.highlightedValue
      });
    }

    if (action.type === _ListboxUnstyled.ActionTypes.blur || action.type === _ListboxUnstyled.ActionTypes.setValue || action.type === _ListboxUnstyled.ActionTypes.optionsChange) {
      return (0, _extends2.default)({}, newState, {
        highlightedValue: newState.selectedValue
      });
    }

    return newState;
  };

  const {
    getRootProps: getButtonRootProps,
    active: buttonActive,
    focusVisible: buttonFocusVisible
  } = (0, _ButtonUnstyled.useButton)({
    disabled,
    ref: handleButtonRef
  });
  const selectedOption = React.useMemo(() => {
    var _props$options$find;

    return props.multiple ? props.options.filter(o => value.includes(o.value)) : (_props$options$find = props.options.find(o => o.value === value)) != null ? _props$options$find : null;
  }, [props.multiple, props.options, value]);
  let useListboxParameters;

  if (props.multiple) {
    useListboxParameters = {
      id: listboxId,
      isOptionDisabled: o => {
        var _o$disabled;

        return (_o$disabled = o == null ? void 0 : o.disabled) != null ? _o$disabled : false;
      },
      optionComparer: (o, v) => (o == null ? void 0 : o.value) === (v == null ? void 0 : v.value),
      listboxRef: handleListboxRef,
      multiple: true,
      onChange: newOptions => {
        setValue(newOptions.map(o => o.value));
        onChange == null ? void 0 : onChange(newOptions.map(o => o.value));
      },
      options,
      optionStringifier,
      value: selectedOption
    };
  } else {
    useListboxParameters = {
      id: listboxId,
      isOptionDisabled: o => {
        var _o$disabled2;

        return (_o$disabled2 = o == null ? void 0 : o.disabled) != null ? _o$disabled2 : false;
      },
      optionComparer: (o, v) => (o == null ? void 0 : o.value) === (v == null ? void 0 : v.value),
      listboxRef: handleListboxRef,
      multiple: false,
      onChange: option => {
        var _option$value, _option$value2;

        setValue((_option$value = option == null ? void 0 : option.value) != null ? _option$value : null);
        onChange == null ? void 0 : onChange((_option$value2 = option == null ? void 0 : option.value) != null ? _option$value2 : null);
      },
      options,
      optionStringifier,
      stateReducer: listboxReducer,
      value: selectedOption
    };
  }

  const {
    getRootProps: getListboxRootProps,
    getOptionProps: getListboxOptionProps,
    getOptionState,
    highlightedOption,
    selectedOption: listboxSelectedOption
  } = (0, _ListboxUnstyled.useListbox)(useListboxParameters);

  const getButtonProps = (otherHandlers = {}) => {
    return (0, _extends2.default)({}, getButtonRootProps((0, _extends2.default)({}, otherHandlers, {
      onClick: createHandleButtonClick(otherHandlers),
      onMouseDown: createHandleMouseDown(otherHandlers),
      onKeyDown: createHandleButtonKeyDown(otherHandlers)
    })), {
      'aria-expanded': open,
      'aria-haspopup': 'listbox'
    });
  };

  const getListboxProps = (otherHandlers = {}) => getListboxRootProps((0, _extends2.default)({}, otherHandlers, {
    onBlur: createHandleListboxBlur(otherHandlers),
    onKeyUp: createHandleListboxKeyUp(otherHandlers)
  }));

  const getOptionProps = (option, otherHandlers = {}) => {
    return getListboxOptionProps(option, (0, _extends2.default)({}, otherHandlers, {
      onClick: createHandleListboxItemClick(otherHandlers)
    }));
  };

  React.useDebugValue({
    selectedOption: listboxSelectedOption,
    open,
    highlightedOption
  });
  return {
    buttonActive,
    buttonFocusVisible,
    disabled,
    getButtonProps,
    getListboxProps,
    getOptionProps,
    getOptionState,
    open,
    value
  };
}

var _default = useSelect;
exports["default"] = _default;

/***/ }),

/***/ 50693:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isOptionGroup = isOptionGroup;

function isOptionGroup(child) {
  return !!child.options;
}

/***/ }),

/***/ 93333:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.areOptionsEqual = areOptionsEqual;
exports.flattenOptionGroups = flattenOptionGroups;
exports.getOptionsFromChildren = getOptionsFromChildren;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _useSelect = __webpack_require__(50693);

function areOptionsEqual(option1, option2) {
  return option1.label === option2.label && option1.value === option2.value && option1.disabled === option2.disabled;
}

function getOptionsFromChildren(children) {
  if (children == null) {
    return [];
  }

  const selectChildren = [];

  _react.default.Children.forEach(children, node => {
    var _props, _props2, _element$props$disabl2;

    const nodeChildren = node == null ? void 0 : (_props = node.props) == null ? void 0 : _props.children;

    if ((node == null ? void 0 : (_props2 = node.props) == null ? void 0 : _props2.value) === undefined) {
      if (nodeChildren != null) {
        var _element$props$disabl;

        const element = node;
        const group = {
          options: getOptionsFromChildren(nodeChildren),
          label: element.props.label,
          disabled: (_element$props$disabl = element.props.disabled) != null ? _element$props$disabl : false
        };
        selectChildren.push(group);
      }

      return;
    }

    const element = node;
    const option = {
      value: element.props.value,
      label: element.props.label || element.props.children,
      disabled: (_element$props$disabl2 = element.props.disabled) != null ? _element$props$disabl2 : false
    };
    selectChildren.push(option);
  });

  return selectChildren != null ? selectChildren : [];
}

function flattenOptionGroups(groupedOptions, isGroupDisabled = false) {
  let flatOptions = [];
  groupedOptions.forEach(optionOrGroup => {
    if ((0, _useSelect.isOptionGroup)(optionOrGroup)) {
      flatOptions = flatOptions.concat(flattenOptionGroups(optionOrGroup.options, optionOrGroup.disabled));
    } else {
      flatOptions.push((0, _extends2.default)({}, optionOrGroup, {
        disabled: isGroupDisabled || optionOrGroup.disabled
      }));
    }
  });
  return flatOptions;
}

/***/ }),

/***/ 40269:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _clsx = _interopRequireDefault(__webpack_require__(57966));

var _utils = __webpack_require__(77462);

var _isHostComponent = _interopRequireDefault(__webpack_require__(65311));

var _composeClasses = _interopRequireDefault(__webpack_require__(36630));

var _sliderUnstyledClasses = __webpack_require__(73260);

var _SliderValueLabelUnstyled = _interopRequireDefault(__webpack_require__(45333));

var _useSlider = _interopRequireWildcard(__webpack_require__(50736));

var _useSlotProps = _interopRequireDefault(__webpack_require__(72679));

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["aria-label", "aria-valuetext", "className", "component", "classes", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "orientation", "scale", "step", "tabIndex", "track", "value", "valueLabelDisplay", "valueLabelFormat", "isRtl", "components", "componentsProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Identity = x => x;

const useUtilityClasses = ownerState => {
  const {
    disabled,
    dragging,
    marked,
    orientation,
    track,
    classes
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', dragging && 'dragging', marked && 'marked', orientation === 'vertical' && 'vertical', track === 'inverted' && 'trackInverted', track === false && 'trackFalse'],
    rail: ['rail'],
    track: ['track'],
    mark: ['mark'],
    markActive: ['markActive'],
    markLabel: ['markLabel'],
    markLabelActive: ['markLabelActive'],
    valueLabel: ['valueLabel'],
    thumb: ['thumb', disabled && 'disabled'],
    active: ['active'],
    disabled: ['disabled'],
    focusVisible: ['focusVisible']
  };
  return (0, _composeClasses.default)(slots, _sliderUnstyledClasses.getSliderUtilityClass, classes);
};

const Forward = ({
  children
}) => children;

const SliderUnstyled = /*#__PURE__*/React.forwardRef(function SliderUnstyled(props, ref) {
  var _ref, _components$Rail, _components$Track, _components$Thumb, _components$ValueLabe, _components$Mark, _components$MarkLabel;

  const {
    'aria-label': ariaLabel,
    'aria-valuetext': ariaValuetext,
    className,
    component,
    classes: classesProp,
    disableSwap = false,
    disabled = false,
    getAriaLabel,
    getAriaValueText,
    marks: marksProp = false,
    max = 100,
    min = 0,
    orientation = 'horizontal',
    scale = Identity,
    step = 1,
    track = 'normal',
    valueLabelDisplay = 'off',
    valueLabelFormat = Identity,
    isRtl = false,
    components = {},
    componentsProps = {}
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded); // all props with defaults
  // consider extracting to hook an reusing the lint rule for the varints

  const ownerState = (0, _extends2.default)({}, props, {
    marks: marksProp,
    classes: classesProp,
    disabled,
    isRtl,
    max,
    min,
    orientation,
    scale,
    step,
    track,
    valueLabelDisplay,
    valueLabelFormat
  });
  const {
    axisProps,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    open,
    active,
    axis,
    range,
    focusedThumbIndex,
    dragging,
    marks,
    values,
    trackOffset,
    trackLeap
  } = (0, _useSlider.default)((0, _extends2.default)({}, ownerState, {
    ref
  }));
  ownerState.marked = marks.length > 0 && marks.some(mark => mark.label);
  ownerState.dragging = dragging;
  ownerState.focusedThumbIndex = focusedThumbIndex;
  const classes = useUtilityClasses(ownerState);
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : 'span';
  const rootProps = (0, _useSlotProps.default)({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    ownerState,
    className: [classes.root, className]
  });
  const Rail = (_components$Rail = components.Rail) != null ? _components$Rail : 'span';
  const railProps = (0, _useSlotProps.default)({
    elementType: Rail,
    externalSlotProps: componentsProps.rail,
    ownerState,
    className: classes.rail
  });
  const Track = (_components$Track = components.Track) != null ? _components$Track : 'span';
  const trackProps = (0, _useSlotProps.default)({
    elementType: Track,
    externalSlotProps: componentsProps.track,
    additionalProps: {
      style: (0, _extends2.default)({}, axisProps[axis].offset(trackOffset), axisProps[axis].leap(trackLeap))
    },
    ownerState,
    className: classes.track
  });
  const Thumb = (_components$Thumb = components.Thumb) != null ? _components$Thumb : 'span';
  const thumbProps = (0, _useSlotProps.default)({
    elementType: Thumb,
    getSlotProps: getThumbProps,
    externalSlotProps: componentsProps.thumb,
    ownerState
  });
  const ValueLabel = (_components$ValueLabe = components.ValueLabel) != null ? _components$ValueLabe : _SliderValueLabelUnstyled.default;
  const valueLabelProps = (0, _useSlotProps.default)({
    elementType: ValueLabel,
    externalSlotProps: componentsProps.valueLabel,
    ownerState
  });
  const Mark = (_components$Mark = components.Mark) != null ? _components$Mark : 'span';
  const markProps = (0, _useSlotProps.default)({
    elementType: Mark,
    externalSlotProps: componentsProps.mark,
    ownerState,
    className: classes.mark
  });
  const MarkLabel = (_components$MarkLabel = components.MarkLabel) != null ? _components$MarkLabel : 'span';
  const markLabelProps = (0, _useSlotProps.default)({
    elementType: MarkLabel,
    externalSlotProps: componentsProps.markLabel,
    ownerState
  });
  const Input = components.Input || 'input';
  const inputProps = (0, _useSlotProps.default)({
    elementType: Input,
    getSlotProps: getHiddenInputProps,
    externalSlotProps: componentsProps.input,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Rail, (0, _extends2.default)({}, railProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)(Track, (0, _extends2.default)({}, trackProps)), marks.filter(mark => mark.value >= min && mark.value <= max).map((mark, index) => {
      const percent = (0, _useSlider.valueToPercent)(mark.value, min, max);
      const style = axisProps[axis].offset(percent);
      let markActive;

      if (track === false) {
        markActive = values.indexOf(mark.value) !== -1;
      } else {
        markActive = track === 'normal' && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === 'inverted' && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Mark, (0, _extends2.default)({
          "data-index": index
        }, markProps, !(0, _isHostComponent.default)(Mark) && {
          markActive
        }, {
          style: (0, _extends2.default)({}, style, markProps.style),
          className: (0, _clsx.default)(markProps.className, markActive && classes.markActive)
        })), mark.label != null ? /*#__PURE__*/(0, _jsxRuntime.jsx)(MarkLabel, (0, _extends2.default)({
          "aria-hidden": true,
          "data-index": index
        }, markLabelProps, !(0, _isHostComponent.default)(MarkLabel) && {
          markLabelActive: markActive
        }, {
          style: (0, _extends2.default)({}, style, markLabelProps.style),
          className: (0, _clsx.default)(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        })) : null]
      }, mark.value);
    }), values.map((value, index) => {
      const percent = (0, _useSlider.valueToPercent)(value, min, max);
      const style = axisProps[axis].offset(percent);
      const ValueLabelComponent = valueLabelDisplay === 'off' ? Forward : ValueLabel;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(React.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ValueLabelComponent, (0, _extends2.default)({}, !(0, _isHostComponent.default)(ValueLabelComponent) && {
          valueLabelFormat,
          valueLabelDisplay,
          value: typeof valueLabelFormat === 'function' ? valueLabelFormat(scale(value), index) : valueLabelFormat,
          index,
          open: open === index || active === index || valueLabelDisplay === 'on',
          disabled
        }, valueLabelProps, {
          className: (0, _clsx.default)(classes.valueLabel, valueLabelProps.className),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Thumb, (0, _extends2.default)({
            "data-index": index,
            "data-focusvisible": focusedThumbIndex === index
          }, thumbProps, {
            className: (0, _clsx.default)(classes.thumb, thumbProps.className, active === index && classes.active, focusedThumbIndex === index && classes.focusVisible),
            style: (0, _extends2.default)({}, style, {
              pointerEvents: disableSwap && active !== index ? 'none' : undefined
            }, thumbProps.style),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Input, (0, _extends2.default)({
              "data-index": index,
              "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
              "aria-valuenow": scale(value),
              "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
              value: values[index]
            }, inputProps))
          }))
        }))
      }, index);
    })]
  }));
});
 false ? 0 : void 0;
var _default = SliderUnstyled;
exports["default"] = _default;

/***/ }),

/***/ 45333:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = SliderValueLabelUnstyled;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _clsx = _interopRequireDefault(__webpack_require__(57966));

var _sliderUnstyledClasses = _interopRequireDefault(__webpack_require__(73260));

var _jsxRuntime = __webpack_require__(85893);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useValueLabelClasses = props => {
  const {
    open
  } = props;
  const utilityClasses = {
    offset: (0, _clsx.default)(open && _sliderUnstyledClasses.default.valueLabelOpen),
    circle: _sliderUnstyledClasses.default.valueLabelCircle,
    label: _sliderUnstyledClasses.default.valueLabelLabel
  };
  return utilityClasses;
};
/**
 * @ignore - internal component.
 */


function SliderValueLabelUnstyled(props) {
  const {
    children,
    className,
    value,
    theme
  } = props;
  const classes = useValueLabelClasses(props);
  return /*#__PURE__*/React.cloneElement(children, {
    className: (0, _clsx.default)(children.props.className)
  }, /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [children.props.children, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: (0, _clsx.default)(classes.offset, className),
      theme: theme,
      "aria-hidden": true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: classes.circle,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: classes.label,
          children: value
        })
      })
    })]
  }));
}

 false ? 0 : void 0;

/***/ }),

/***/ 13162:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  SliderValueLabelUnstyled: true,
  sliderUnstyledClasses: true,
  useSlider: true
};
Object.defineProperty(exports, "SliderValueLabelUnstyled", ({
  enumerable: true,
  get: function () {
    return _SliderValueLabelUnstyled.default;
  }
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _SliderUnstyled.default;
  }
}));
Object.defineProperty(exports, "sliderUnstyledClasses", ({
  enumerable: true,
  get: function () {
    return _sliderUnstyledClasses.default;
  }
}));
Object.defineProperty(exports, "useSlider", ({
  enumerable: true,
  get: function () {
    return _useSlider.default;
  }
}));

var _SliderUnstyled = _interopRequireDefault(__webpack_require__(40269));

var _SliderValueLabelUnstyled = _interopRequireDefault(__webpack_require__(45333));

var _sliderUnstyledClasses = _interopRequireWildcard(__webpack_require__(73260));

Object.keys(_sliderUnstyledClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _sliderUnstyledClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sliderUnstyledClasses[key];
    }
  });
});

var _useSlider = _interopRequireDefault(__webpack_require__(50736));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 73260:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getSliderUtilityClass = getSliderUtilityClass;

var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(11469));

var _generateUtilityClass = _interopRequireDefault(__webpack_require__(7084));

function getSliderUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiSlider', slot);
}

const sliderUnstyledClasses = (0, _generateUtilityClasses.default)('MuiSlider', ['root', 'active', 'focusVisible', 'disabled', 'dragging', 'marked', 'vertical', 'trackInverted', 'trackFalse', 'rail', 'track', 'mark', 'markActive', 'markLabel', 'markLabelActive', 'thumb', 'valueLabel', 'valueLabelOpen', 'valueLabelCircle', 'valueLabelLabel']);
var _default = sliderUnstyledClasses;
exports["default"] = _default;

/***/ }),

/***/ 50736:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Identity = void 0;
exports["default"] = useSlider;
exports.valueToPercent = valueToPercent;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _utils = __webpack_require__(77462);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;

function asc(a, b) {
  return a - b;
}

function clamp(value, min, max) {
  if (value == null) {
    return min;
  }

  return Math.min(Math.max(min, value), max);
}

function findClosest(values, currentValue) {
  var _values$reduce;

  const {
    index: closestIndex
  } = (_values$reduce = values.reduce((acc, value, index) => {
    const distance = Math.abs(currentValue - value);

    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index
      };
    }

    return acc;
  }, null)) != null ? _values$reduce : {};
  return closestIndex;
}

function trackFinger(event, touchId) {
  // The event is TouchEvent
  if (touchId.current !== undefined && event.changedTouches) {
    const touchEvent = event;

    for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
      const touch = touchEvent.changedTouches[i];

      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }

    return false;
  } // The event is MouseEvent


  return {
    x: event.clientX,
    y: event.clientY
  };
}

function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}

function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}

function getDecimalPrecision(num) {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

function roundValueToStep(value, step, min) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

function setValueIndex({
  values,
  newValue,
  index
}) {
  const output = values.slice();
  output[index] = newValue;
  return output.sort(asc);
}

function focusThumb({
  sliderRef,
  activeIndex,
  setActive
}) {
  var _sliderRef$current, _doc$activeElement;

  const doc = (0, _utils.unstable_ownerDocument)(sliderRef.current);

  if (!((_sliderRef$current = sliderRef.current) != null && _sliderRef$current.contains(doc.activeElement)) || Number(doc == null ? void 0 : (_doc$activeElement = doc.activeElement) == null ? void 0 : _doc$activeElement.getAttribute('data-index')) !== activeIndex) {
    var _sliderRef$current2;

    (_sliderRef$current2 = sliderRef.current) == null ? void 0 : _sliderRef$current2.querySelector(`[type="range"][data-index="${activeIndex}"]`).focus();
  }

  if (setActive) {
    setActive(activeIndex);
  }
}

const axisProps = {
  horizontal: {
    offset: percent => ({
      left: `${percent}%`
    }),
    leap: percent => ({
      width: `${percent}%`
    })
  },
  'horizontal-reverse': {
    offset: percent => ({
      right: `${percent}%`
    }),
    leap: percent => ({
      width: `${percent}%`
    })
  },
  vertical: {
    offset: percent => ({
      bottom: `${percent}%`
    }),
    leap: percent => ({
      height: `${percent}%`
    })
  }
};

const Identity = x => x; // TODO: remove support for Safari < 13.
// https://caniuse.com/#search=touch-action
//
// Safari, on iOS, supports touch action since v13.
// Over 80% of the iOS phones are compatible
// in August 2020.
// Utilizing the CSS.supports method to check if touch-action is supported.
// Since CSS.supports is supported on all but Edge@12 and IE and touch-action
// is supported on both Edge@12 and IE if CSS.supports is not available that means that
// touch-action will be supported


exports.Identity = Identity;
let cachedSupportsTouchActionNone;

function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === undefined) {
    if (typeof CSS !== 'undefined' && typeof CSS.supports === 'function') {
      cachedSupportsTouchActionNone = CSS.supports('touch-action', 'none');
    } else {
      cachedSupportsTouchActionNone = true;
    }
  }

  return cachedSupportsTouchActionNone;
}

function useSlider(parameters) {
  const {
    'aria-labelledby': ariaLabelledby,
    defaultValue,
    disabled = false,
    disableSwap = false,
    isRtl = false,
    marks: marksProp = false,
    max = 100,
    min = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = 'horizontal',
    ref,
    scale = Identity,
    step = 1,
    tabIndex,
    value: valueProp
  } = parameters;
  const touchId = React.useRef(); // We can't use the :active browser pseudo-classes.
  // - The active state isn't triggered when clicking on the rail.
  // - The active state isn't transferred when inversing a range slider.

  const [active, setActive] = React.useState(-1);
  const [open, setOpen] = React.useState(-1);
  const [dragging, setDragging] = React.useState(false);
  const moveCount = React.useRef(0);
  const [valueDerived, setValueState] = (0, _utils.unstable_useControlled)({
    controlled: valueProp,
    default: defaultValue != null ? defaultValue : min,
    name: 'Slider'
  });

  const handleChange = onChange && ((event, value, thumbIndex) => {
    // Redefine target to allow name and value to be read.
    // This allows seamless integration with the most popular form libraries.
    // https://github.com/mui/material-ui/issues/13485#issuecomment-676048492
    // Clone the event to not override `target` of the original event.
    const nativeEvent = event.nativeEvent || event; // @ts-ignore The nativeEvent is function, not object

    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
    Object.defineProperty(clonedEvent, 'target', {
      writable: true,
      value: {
        value,
        name
      }
    });
    onChange(clonedEvent, value, thumbIndex);
  });

  const range = Array.isArray(valueDerived);
  let values = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values = values.map(value => clamp(value, min, max));
  const marks = marksProp === true && step !== null ? [...Array(Math.floor((max - min) / step) + 1)].map((_, index) => ({
    value: min + step * index
  })) : marksProp || [];
  const marksValues = marks.map(mark => mark.value);
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = (0, _utils.unstable_useIsFocusVisible)();
  const [focusedThumbIndex, setFocusedThumbIndex] = React.useState(-1);
  const sliderRef = React.useRef();
  const handleFocusRef = (0, _utils.unstable_useForkRef)(focusVisibleRef, sliderRef);
  const handleRef = (0, _utils.unstable_useForkRef)(ref, handleFocusRef);

  const createHandleHiddenInputFocus = otherHandlers => event => {
    var _otherHandlers$onFocu;

    const index = Number(event.currentTarget.getAttribute('data-index'));
    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusedThumbIndex(index);
    }

    setOpen(index);
    otherHandlers == null ? void 0 : (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
  };

  const createHandleHiddenInputBlur = otherHandlers => event => {
    var _otherHandlers$onBlur;

    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusedThumbIndex(-1);
    }

    setOpen(-1);
    otherHandlers == null ? void 0 : (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
  };

  (0, _utils.unstable_useEnhancedEffect)(() => {
    if (disabled && sliderRef.current.contains(document.activeElement)) {
      var _document$activeEleme;

      // This is necessary because Firefox and Safari will keep focus
      // on a disabled element:
      // https://codesandbox.io/s/mui-pr-22247-forked-h151h?file=/src/App.js
      // @ts-ignore
      (_document$activeEleme = document.activeElement) == null ? void 0 : _document$activeEleme.blur();
    }
  }, [disabled]);

  if (disabled && active !== -1) {
    setActive(-1);
  }

  if (disabled && focusedThumbIndex !== -1) {
    setFocusedThumbIndex(-1);
  }

  const createHandleHiddenInputChange = otherHandlers => event => {
    var _otherHandlers$onChan;

    (_otherHandlers$onChan = otherHandlers.onChange) == null ? void 0 : _otherHandlers$onChan.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute('data-index'));
    const value = values[index];
    const marksIndex = marksValues.indexOf(value); // @ts-ignore

    let newValue = event.target.valueAsNumber;

    if (marks && step == null) {
      newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
    }

    newValue = clamp(newValue, min, max);

    if (marks && step == null) {
      const currentMarkIndex = marksValues.indexOf(values[index]);
      newValue = newValue < values[index] ? marksValues[currentMarkIndex - 1] : marksValues[currentMarkIndex + 1];
    }

    if (range) {
      // Bound the new value to the thumb's neighbours.
      if (disableSwap) {
        newValue = clamp(newValue, values[index - 1] || -Infinity, values[index + 1] || Infinity);
      }

      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index
      });
      let activeIndex = index; // Potentially swap the index if needed.

      if (!disableSwap) {
        activeIndex = newValue.indexOf(previousValue);
      }

      focusThumb({
        sliderRef,
        activeIndex
      });
    }

    setValueState(newValue);
    setFocusedThumbIndex(index);

    if (handleChange) {
      handleChange(event, newValue, index);
    }

    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  };

  const previousIndex = React.useRef();
  let axis = orientation;

  if (isRtl && orientation === 'horizontal') {
    axis += '-reverse';
  }

  const getFingerNewValue = ({
    finger,
    move = false,
    values: values2
  }) => {
    const {
      current: slider
    } = sliderRef;
    const {
      width,
      height,
      bottom,
      left
    } = slider.getBoundingClientRect();
    let percent;

    if (axis.indexOf('vertical') === 0) {
      percent = (bottom - finger.y) / height;
    } else {
      percent = (finger.x - left) / width;
    }

    if (axis.indexOf('-reverse') !== -1) {
      percent = 1 - percent;
    }

    let newValue;
    newValue = percentToValue(percent, min, max);

    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }

    newValue = clamp(newValue, min, max);
    let activeIndex = 0;

    if (range) {
      if (!move) {
        activeIndex = findClosest(values2, newValue);
      } else {
        activeIndex = previousIndex.current;
      } // Bound the new value to the thumb's neighbours.


      if (disableSwap) {
        newValue = clamp(newValue, values2[activeIndex - 1] || -Infinity, values2[activeIndex + 1] || Infinity);
      }

      const previousValue = newValue;
      newValue = setValueIndex({
        values: values2,
        newValue,
        index: activeIndex
      }); // Potentially swap the index if needed.

      if (!(disableSwap && move)) {
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }
    }

    return {
      newValue,
      activeIndex
    };
  };

  const handleTouchMove = (0, _utils.unstable_useEventCallback)(nativeEvent => {
    const finger = trackFinger(nativeEvent, touchId);

    if (!finger) {
      return;
    }

    moveCount.current += 1; // Cancel move in case some other element consumed a mouseup event and it was not fired.
    // @ts-ignore buttons doesn't not exists on touch event

    if (nativeEvent.type === 'mousemove' && nativeEvent.buttons === 0) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      handleTouchEnd(nativeEvent);
      return;
    }

    const {
      newValue,
      activeIndex
    } = getFingerNewValue({
      finger,
      move: true,
      values
    });
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);

    if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
      setDragging(true);
    }

    if (handleChange) {
      handleChange(nativeEvent, newValue, activeIndex);
    }
  });
  const handleTouchEnd = (0, _utils.unstable_useEventCallback)(nativeEvent => {
    const finger = trackFinger(nativeEvent, touchId);
    setDragging(false);

    if (!finger) {
      return;
    }

    const {
      newValue
    } = getFingerNewValue({
      finger,
      move: true,
      values
    });
    setActive(-1);

    if (nativeEvent.type === 'touchend') {
      setOpen(-1);
    }

    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, newValue);
    }

    touchId.current = undefined; // eslint-disable-next-line @typescript-eslint/no-use-before-define

    stopListening();
  });
  const handleTouchStart = (0, _utils.unstable_useEventCallback)(nativeEvent => {
    if (disabled) {
      return;
    } // If touch-action: none; is not supported we need to prevent the scroll manually.


    if (!doesSupportTouchActionNone()) {
      nativeEvent.preventDefault();
    }

    const touch = nativeEvent.changedTouches[0];

    if (touch != null) {
      // A number that uniquely identifies the current finger in the touch session.
      touchId.current = touch.identifier;
    }

    const finger = trackFinger(nativeEvent, touchId);

    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger,
        values
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);

      if (handleChange) {
        handleChange(nativeEvent, newValue, activeIndex);
      }
    }

    moveCount.current = 0;
    const doc = (0, _utils.unstable_ownerDocument)(sliderRef.current);
    doc.addEventListener('touchmove', handleTouchMove);
    doc.addEventListener('touchend', handleTouchEnd);
  });
  const stopListening = React.useCallback(() => {
    const doc = (0, _utils.unstable_ownerDocument)(sliderRef.current);
    doc.removeEventListener('mousemove', handleTouchMove);
    doc.removeEventListener('mouseup', handleTouchEnd);
    doc.removeEventListener('touchmove', handleTouchMove);
    doc.removeEventListener('touchend', handleTouchEnd);
  }, [handleTouchEnd, handleTouchMove]);
  React.useEffect(() => {
    const {
      current: slider
    } = sliderRef;
    slider.addEventListener('touchstart', handleTouchStart, {
      passive: doesSupportTouchActionNone()
    });
    return () => {
      // @ts-ignore
      slider.removeEventListener('touchstart', handleTouchStart, {
        passive: doesSupportTouchActionNone()
      });
      stopListening();
    };
  }, [stopListening, handleTouchStart]);
  React.useEffect(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);

  const createHandleMouseDown = otherHandlers => event => {
    var _otherHandlers$onMous;

    (_otherHandlers$onMous = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);

    if (disabled) {
      return;
    }

    if (event.defaultPrevented) {
      return;
    } // Only handle left clicks


    if (event.button !== 0) {
      return;
    } // Avoid text selection


    event.preventDefault();
    const finger = trackFinger(event, touchId);

    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger,
        values
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);

      if (handleChange) {
        handleChange(event, newValue, activeIndex);
      }
    }

    moveCount.current = 0;
    const doc = (0, _utils.unstable_ownerDocument)(sliderRef.current);
    doc.addEventListener('mousemove', handleTouchMove);
    doc.addEventListener('mouseup', handleTouchEnd);
  };

  const trackOffset = valueToPercent(range ? values[0] : min, min, max);
  const trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;

  const getRootProps = (otherHandlers = {}) => {
    const ownEventHandlers = {
      onMouseDown: createHandleMouseDown(otherHandlers || {})
    };
    const mergedEventHandlers = (0, _extends2.default)({}, otherHandlers, ownEventHandlers);
    return (0, _extends2.default)({
      ref: handleRef
    }, mergedEventHandlers);
  };

  const createHandleMouseOver = otherHandlers => event => {
    var _otherHandlers$onMous2;

    (_otherHandlers$onMous2 = otherHandlers.onMouseOver) == null ? void 0 : _otherHandlers$onMous2.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute('data-index'));
    setOpen(index);
  };

  const createHandleMouseLeave = otherHandlers => event => {
    var _otherHandlers$onMous3;

    (_otherHandlers$onMous3 = otherHandlers.onMouseLeave) == null ? void 0 : _otherHandlers$onMous3.call(otherHandlers, event);
    setOpen(-1);
  };

  const getThumbProps = (otherHandlers = {}) => {
    const ownEventHandlers = {
      onMouseOver: createHandleMouseOver(otherHandlers || {}),
      onMouseLeave: createHandleMouseLeave(otherHandlers || {})
    };
    return (0, _extends2.default)({}, otherHandlers, ownEventHandlers);
  };

  const getHiddenInputProps = (otherHandlers = {}) => {
    var _parameters$step;

    const ownEventHandlers = {
      onChange: createHandleHiddenInputChange(otherHandlers || {}),
      onFocus: createHandleHiddenInputFocus(otherHandlers || {}),
      onBlur: createHandleHiddenInputBlur(otherHandlers || {})
    };
    const mergedEventHandlers = (0, _extends2.default)({}, otherHandlers, ownEventHandlers);
    return (0, _extends2.default)({
      tabIndex,
      'aria-labelledby': ariaLabelledby,
      'aria-orientation': orientation,
      'aria-valuemax': scale(max),
      'aria-valuemin': scale(min),
      name,
      type: 'range',
      min: parameters.min,
      max: parameters.max,
      step: (_parameters$step = parameters.step) != null ? _parameters$step : undefined,
      disabled
    }, mergedEventHandlers, {
      style: (0, _extends2.default)({}, _utils.visuallyHidden, {
        direction: isRtl ? 'rtl' : 'ltr',
        // So that VoiceOver's focus indicator matches the thumb's dimensions
        width: '100%',
        height: '100%'
      })
    });
  };

  return {
    active,
    axis: axis,
    axisProps,
    dragging,
    focusedThumbIndex,
    getHiddenInputProps,
    getRootProps,
    getThumbProps,
    marks: marks,
    open,
    range,
    trackLeap,
    trackOffset,
    values
  };
}

/***/ }),

/***/ 33163:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _composeClasses = _interopRequireDefault(__webpack_require__(36630));

var _useSwitch = _interopRequireDefault(__webpack_require__(66249));

var _switchUnstyledClasses = __webpack_require__(32220);

var _utils = __webpack_require__(6443);

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["checked", "component", "components", "componentsProps", "defaultChecked", "disabled", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    checked,
    disabled,
    focusVisible,
    readOnly
  } = ownerState;
  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled', focusVisible && 'focusVisible', readOnly && 'readOnly'],
    thumb: ['thumb'],
    input: ['input'],
    track: ['track']
  };
  return (0, _composeClasses.default)(slots, _switchUnstyledClasses.getSwitchUnstyledUtilityClass, {});
};
/**
 * The foundation for building custom-styled switches.
 *
 * Demos:
 *
 * - [Switch](https://mui.com/base/react-switch/)
 *
 * API:
 *
 * - [SwitchUnstyled API](https://mui.com/base/api/switch-unstyled/)
 */


const SwitchUnstyled = /*#__PURE__*/React.forwardRef(function SwitchUnstyled(props, ref) {
  var _ref, _components$Thumb, _components$Input, _components$Track;

  const {
    checked: checkedProp,
    component,
    components = {},
    componentsProps = {},
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly: readOnlyProp
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const useSwitchProps = {
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly: readOnlyProp
  };
  const {
    getInputProps,
    checked,
    disabled,
    focusVisible,
    readOnly
  } = (0, _useSwitch.default)(useSwitchProps);
  const ownerState = (0, _extends2.default)({}, props, {
    checked,
    disabled,
    focusVisible,
    readOnly
  });
  const classes = useUtilityClasses(ownerState);
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : 'span';
  const rootProps = (0, _utils.useSlotProps)({
    elementType: Root,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref
    },
    ownerState,
    className: classes.root
  });
  const Thumb = (_components$Thumb = components.Thumb) != null ? _components$Thumb : 'span';
  const thumbProps = (0, _utils.useSlotProps)({
    elementType: Thumb,
    externalSlotProps: componentsProps.thumb,
    ownerState,
    className: classes.thumb
  });
  const Input = (_components$Input = components.Input) != null ? _components$Input : 'input';
  const inputProps = (0, _utils.useSlotProps)({
    elementType: Input,
    getSlotProps: getInputProps,
    externalSlotProps: componentsProps.input,
    ownerState,
    className: classes.input
  });
  const Track = components.Track === null ? () => null : (_components$Track = components.Track) != null ? _components$Track : 'span';
  const trackProps = (0, _utils.useSlotProps)({
    elementType: Track,
    externalSlotProps: componentsProps.track,
    ownerState,
    className: classes.track
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Track, (0, _extends2.default)({}, trackProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)(Thumb, (0, _extends2.default)({}, thumbProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)(Input, (0, _extends2.default)({}, inputProps))]
  }));
});
 false ? 0 : void 0;
var _default = SwitchUnstyled;
exports["default"] = _default;

/***/ }),

/***/ 75498:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 111:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useSwitch: true,
  switchUnstyledClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _SwitchUnstyled.default;
  }
}));
Object.defineProperty(exports, "switchUnstyledClasses", ({
  enumerable: true,
  get: function () {
    return _switchUnstyledClasses.default;
  }
}));
Object.defineProperty(exports, "useSwitch", ({
  enumerable: true,
  get: function () {
    return _useSwitch.default;
  }
}));

var _SwitchUnstyled = _interopRequireDefault(__webpack_require__(33163));

var _SwitchUnstyled2 = __webpack_require__(75498);

Object.keys(_SwitchUnstyled2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _SwitchUnstyled2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SwitchUnstyled2[key];
    }
  });
});

var _useSwitch = _interopRequireDefault(__webpack_require__(66249));

var _useSwitch2 = __webpack_require__(76189);

Object.keys(_useSwitch2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useSwitch2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useSwitch2[key];
    }
  });
});

var _switchUnstyledClasses = _interopRequireWildcard(__webpack_require__(32220));

Object.keys(_switchUnstyledClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _switchUnstyledClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _switchUnstyledClasses[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 32220:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getSwitchUnstyledUtilityClass = getSwitchUnstyledUtilityClass;

var _generateUtilityClass = _interopRequireDefault(__webpack_require__(7084));

var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(11469));

function getSwitchUnstyledUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiSwitch', slot);
}

const switchUnstyledClasses = (0, _generateUtilityClasses.default)('MuiSwitch', ['root', 'input', 'track', 'thumb', 'checked', 'disabled', 'focusVisible', 'readOnly']);
var _default = switchUnstyledClasses;
exports["default"] = _default;

/***/ }),

/***/ 66249:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useSwitch;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _utils = __webpack_require__(77462);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * The basic building block for creating custom switches.
 *
 * Demos:
 *
 * - [Switches](https://mui.com/components/switches/)
 */
function useSwitch(props) {
  const {
    checked: checkedProp,
    defaultChecked,
    disabled,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly,
    required
  } = props;
  const [checked, setCheckedState] = (0, _utils.unstable_useControlled)({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'Switch',
    state: 'checked'
  });

  const createHandleInputChange = otherProps => event => {
    var _otherProps$onChange;

    // Workaround for https://github.com/facebook/react/issues/9023
    if (event.nativeEvent.defaultPrevented) {
      return;
    }

    setCheckedState(event.target.checked);
    onChange == null ? void 0 : onChange(event);
    (_otherProps$onChange = otherProps.onChange) == null ? void 0 : _otherProps$onChange.call(otherProps, event);
  };

  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = (0, _utils.unstable_useIsFocusVisible)();
  const [focusVisible, setFocusVisible] = React.useState(false);

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  React.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);
  const inputRef = React.useRef(null);

  const createHandleFocus = otherProps => event => {
    var _otherProps$onFocus;

    // Fix for https://github.com/facebook/react/issues/7769
    if (!inputRef.current) {
      inputRef.current = event.currentTarget;
    }

    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      onFocusVisible == null ? void 0 : onFocusVisible(event);
    }

    onFocus == null ? void 0 : onFocus(event);
    (_otherProps$onFocus = otherProps.onFocus) == null ? void 0 : _otherProps$onFocus.call(otherProps, event);
  };

  const createHandleBlur = otherProps => event => {
    var _otherProps$onBlur;

    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }

    onBlur == null ? void 0 : onBlur(event);
    (_otherProps$onBlur = otherProps.onBlur) == null ? void 0 : _otherProps$onBlur.call(otherProps, event);
  };

  const handleRefChange = (0, _utils.unstable_useForkRef)(focusVisibleRef, inputRef);

  const getInputProps = (otherProps = {}) => (0, _extends2.default)({
    checked: checkedProp,
    defaultChecked,
    disabled,
    readOnly,
    ref: handleRefChange,
    required,
    type: 'checkbox'
  }, otherProps, {
    onChange: createHandleInputChange(otherProps),
    onFocus: createHandleFocus(otherProps),
    onBlur: createHandleBlur(otherProps)
  });

  return {
    checked,
    disabled: Boolean(disabled),
    focusVisible,
    getInputProps,
    readOnly: Boolean(readOnly)
  };
}

/***/ }),

/***/ 76189:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 93394:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _clsx = _interopRequireDefault(__webpack_require__(57966));

var _utils = __webpack_require__(6443);

var _composeClasses = _interopRequireDefault(__webpack_require__(36630));

var _tabPanelUnstyledClasses = __webpack_require__(6130);

var _useTabPanel = _interopRequireDefault(__webpack_require__(46516));

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["children", "className", "value", "components", "componentsProps", "component"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    hidden
  } = ownerState;
  const slots = {
    root: ['root', hidden && 'hidden']
  };
  return (0, _composeClasses.default)(slots, _tabPanelUnstyledClasses.getTabPanelUnstyledUtilityClass, {});
};
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base/react-tabs/)
 *
 * API:
 *
 * - [TabPanelUnstyled API](https://mui.com/base/api/tab-panel-unstyled/)
 */


const TabPanelUnstyled = /*#__PURE__*/React.forwardRef(function TabPanelUnstyled(props, ref) {
  var _ref, _componentsProps$root;

  const {
    children,
    className,
    components = {},
    componentsProps = {},
    component
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    hidden,
    getRootProps
  } = (0, _useTabPanel.default)(props);
  const ownerState = (0, _extends2.default)({}, props, {
    hidden
  });
  const classes = useUtilityClasses(ownerState);
  const TabPanelRoot = (_ref = component != null ? component : components.Root) != null ? _ref : 'div';
  const tabPanelRootProps = (0, _utils.appendOwnerState)(TabPanelRoot, (0, _extends2.default)({}, getRootProps(), {
    role: 'tabpanel'
  }, other, componentsProps.root, {
    ref,
    className: (0, _clsx.default)(classes.root, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, className)
  }), ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanelRoot, (0, _extends2.default)({}, tabPanelRootProps, {
    children: !hidden && children
  }));
});
 false ? 0 : void 0;
var _default = TabPanelUnstyled;
exports["default"] = _default;

/***/ }),

/***/ 96569:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 37130:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  tabPanelUnstyledClasses: true,
  useTabPanel: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _TabPanelUnstyled.default;
  }
}));
Object.defineProperty(exports, "tabPanelUnstyledClasses", ({
  enumerable: true,
  get: function () {
    return _tabPanelUnstyledClasses.default;
  }
}));
Object.defineProperty(exports, "useTabPanel", ({
  enumerable: true,
  get: function () {
    return _useTabPanel.default;
  }
}));

var _TabPanelUnstyled = _interopRequireDefault(__webpack_require__(93394));

var _TabPanelUnstyled2 = __webpack_require__(96569);

Object.keys(_TabPanelUnstyled2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabPanelUnstyled2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabPanelUnstyled2[key];
    }
  });
});

var _tabPanelUnstyledClasses = _interopRequireWildcard(__webpack_require__(6130));

Object.keys(_tabPanelUnstyledClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tabPanelUnstyledClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tabPanelUnstyledClasses[key];
    }
  });
});

var _useTabPanel = _interopRequireDefault(__webpack_require__(46516));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 6130:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getTabPanelUnstyledUtilityClass = getTabPanelUnstyledUtilityClass;

var _generateUtilityClass = _interopRequireDefault(__webpack_require__(7084));

var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(11469));

function getTabPanelUnstyledUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('TabPanelUnstyled', slot);
}

const tabPanelUnstyledClasses = (0, _generateUtilityClasses.default)('TabPanelUnstyled', ['root', 'hidden']);
var _default = tabPanelUnstyledClasses;
exports["default"] = _default;

/***/ }),

/***/ 46516:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _TabsUnstyled = __webpack_require__(90756);

const useTabPanel = parameters => {
  const {
    value
  } = parameters;
  const context = (0, _TabsUnstyled.useTabContext)();

  if (context === null) {
    throw new Error('No TabContext provided');
  }

  const hidden = value !== context.value;
  const id = (0, _TabsUnstyled.getPanelId)(context, value);
  const tabId = (0, _TabsUnstyled.getTabId)(context, value);

  const getRootProps = () => {
    return {
      'aria-labelledby': tabId != null ? tabId : undefined,
      hidden,
      id: id != null ? id : undefined
    };
  };

  return {
    hidden,
    getRootProps
  };
};

var _default = useTabPanel;
exports["default"] = _default;

/***/ }),

/***/ 92074:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _clsx = _interopRequireDefault(__webpack_require__(57966));

var _utils = __webpack_require__(77462);

var _composeClasses = _interopRequireDefault(__webpack_require__(36630));

var _appendOwnerState = _interopRequireDefault(__webpack_require__(69182));

var _tabUnstyledClasses = __webpack_require__(6252);

var _useTab = _interopRequireDefault(__webpack_require__(63264));

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["action", "children", "value", "className", "disabled", "onChange", "onClick", "onFocus", "component", "components", "componentsProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ['root', selected && 'selected', disabled && 'disabled']
  };
  return (0, _composeClasses.default)(slots, _tabUnstyledClasses.getTabUnstyledUtilityClass, {});
};
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base/react-tabs/)
 *
 * API:
 *
 * - [TabUnstyled API](https://mui.com/base/api/tab-unstyled/)
 */


const TabUnstyled = /*#__PURE__*/React.forwardRef(function TabUnstyled(props, ref) {
  var _ref, _componentsProps$root;

  const {
    action,
    children,
    className,
    disabled = false,
    component,
    components = {},
    componentsProps = {}
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const tabRef = React.useRef();
  const handleRef = (0, _utils.unstable_useForkRef)(tabRef, ref);
  const {
    active,
    focusVisible,
    setFocusVisible,
    selected,
    getRootProps
  } = (0, _useTab.default)((0, _extends2.default)({}, props, {
    ref: handleRef
  }));
  React.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      tabRef.current.focus();
    }
  }), [setFocusVisible]);
  const ownerState = (0, _extends2.default)({}, props, {
    active,
    focusVisible,
    disabled,
    selected
  });
  const classes = useUtilityClasses(ownerState);
  const TabRoot = (_ref = component != null ? component : components.Root) != null ? _ref : 'button';
  const tabRootProps = (0, _appendOwnerState.default)(TabRoot, (0, _extends2.default)({}, getRootProps(), other, componentsProps.root, {
    className: (0, _clsx.default)(classes.root, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, className),
    ref
  }), ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TabRoot, (0, _extends2.default)({}, tabRootProps, {
    children: children
  }));
});
 false ? 0 : void 0;
var _default = TabUnstyled;
exports["default"] = _default;

/***/ }),

/***/ 71704:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 23114:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  tabUnstyledClasses: true,
  useTab: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _TabUnstyled.default;
  }
}));
Object.defineProperty(exports, "tabUnstyledClasses", ({
  enumerable: true,
  get: function () {
    return _tabUnstyledClasses.default;
  }
}));
Object.defineProperty(exports, "useTab", ({
  enumerable: true,
  get: function () {
    return _useTab.default;
  }
}));

var _TabUnstyled = _interopRequireDefault(__webpack_require__(92074));

var _TabUnstyled2 = __webpack_require__(71704);

Object.keys(_TabUnstyled2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabUnstyled2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabUnstyled2[key];
    }
  });
});

var _tabUnstyledClasses = _interopRequireWildcard(__webpack_require__(6252));

Object.keys(_tabUnstyledClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tabUnstyledClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tabUnstyledClasses[key];
    }
  });
});

var _useTab = _interopRequireDefault(__webpack_require__(63264));

var _useTab2 = __webpack_require__(96352);

Object.keys(_useTab2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useTab2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useTab2[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 6252:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getTabUnstyledUtilityClass = getTabUnstyledUtilityClass;

var _generateUtilityClass = _interopRequireDefault(__webpack_require__(7084));

var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(11469));

function getTabUnstyledUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('TabUnstyled', slot);
}

const tabUnstyledClasses = (0, _generateUtilityClasses.default)('TabUnstyled', ['root', 'selected', 'disabled']);
var _default = tabUnstyledClasses;
exports["default"] = _default;

/***/ }),

/***/ 63264:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var _TabsUnstyled = __webpack_require__(90756);

var _ButtonUnstyled = __webpack_require__(64651);

const _excluded = ["getRootProps"];

const useTab = parameters => {
  var _getPanelId, _getTabId;

  const {
    value: valueProp,
    onChange,
    onClick,
    onFocus
  } = parameters;

  const _useButton = (0, _ButtonUnstyled.useButton)(parameters),
        {
    getRootProps: getRootPropsButton
  } = _useButton,
        otherButtonProps = (0, _objectWithoutPropertiesLoose2.default)(_useButton, _excluded);

  const context = (0, _TabsUnstyled.useTabContext)();

  if (context === null) {
    throw new Error('No TabContext provided');
  }

  const value = valueProp != null ? valueProp : 0;
  const selected = context.value === value;
  const selectionFollowsFocus = context.selectionFollowsFocus;
  const a11yAttributes = {
    role: 'tab',
    'aria-controls': (_getPanelId = (0, _TabsUnstyled.getPanelId)(context, value)) != null ? _getPanelId : undefined,
    id: (_getTabId = (0, _TabsUnstyled.getTabId)(context, value)) != null ? _getTabId : undefined,
    'aria-selected': selected,
    disabled: otherButtonProps.disabled
  };

  const createHandleFocus = otherHandlers => event => {
    var _otherHandlers$onFocu;

    (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);

    if (event.defaultPrevented) {
      return;
    }

    if (selectionFollowsFocus && !selected) {
      if (onChange) {
        onChange(event, value);
      }

      context.onSelected(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  const createHandleClick = otherHandlers => event => {
    var _otherHandlers$onClic;

    (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);

    if (event.defaultPrevented) {
      return;
    }

    if (!selected) {
      if (onChange) {
        onChange(event, value);
      }

      context.onSelected(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  const getRootProps = (otherHandlers = {}) => {
    const buttonResolvedProps = getRootPropsButton((0, _extends2.default)({}, otherHandlers, {
      onClick: createHandleClick(otherHandlers),
      onFocus: createHandleFocus(otherHandlers)
    }));
    return (0, _extends2.default)({}, buttonResolvedProps, a11yAttributes);
  };

  return (0, _extends2.default)({
    getRootProps
  }, otherButtonProps, {
    selected
  });
};

var _default = useTab;
exports["default"] = _default;

/***/ }),

/***/ 96352:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 26002:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _clsx = _interopRequireDefault(__webpack_require__(57966));

var _composeClasses = _interopRequireDefault(__webpack_require__(36630));

var _utils = __webpack_require__(6443);

var _tabsListUnstyledClasses = __webpack_require__(20497);

var _useTabsList = _interopRequireDefault(__webpack_require__(17004));

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["className", "children", "component", "components", "componentsProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation]
  };
  return (0, _composeClasses.default)(slots, _tabsListUnstyledClasses.getTabsListUnstyledUtilityClass, {});
};
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base/react-tabs/)
 *
 * API:
 *
 * - [TabsListUnstyled API](https://mui.com/base/api/tabs-list-unstyled/)
 */


const TabsListUnstyled = /*#__PURE__*/React.forwardRef((props, ref) => {
  var _ref, _componentsProps$root;

  const {
    className,
    component,
    components = {},
    componentsProps = {}
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    isRtl,
    orientation,
    getRootProps,
    processChildren
  } = (0, _useTabsList.default)((0, _extends2.default)({}, props, {
    ref
  }));
  const ownerState = (0, _extends2.default)({}, props, {
    isRtl,
    orientation
  });
  const classes = useUtilityClasses(ownerState);
  const TabsListRoot = (_ref = component != null ? component : components.Root) != null ? _ref : 'div';
  const tabsListRootProps = (0, _utils.appendOwnerState)(TabsListRoot, (0, _extends2.default)({}, getRootProps(), other, componentsProps.root, {
    className: (0, _clsx.default)(className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, classes.root)
  }), ownerState);
  const processedChildren = processChildren();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TabsListRoot, (0, _extends2.default)({}, tabsListRootProps, {
    children: processedChildren
  }));
});
 false ? 0 : void 0;
var _default = TabsListUnstyled;
exports["default"] = _default;

/***/ }),

/***/ 19806:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 37441:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  tabsListUnstyledClasses: true,
  useTabsList: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _TabsListUnstyled.default;
  }
}));
Object.defineProperty(exports, "tabsListUnstyledClasses", ({
  enumerable: true,
  get: function () {
    return _tabsListUnstyledClasses.default;
  }
}));
Object.defineProperty(exports, "useTabsList", ({
  enumerable: true,
  get: function () {
    return _useTabsList.default;
  }
}));

var _TabsListUnstyled = _interopRequireDefault(__webpack_require__(26002));

var _TabsListUnstyled2 = __webpack_require__(19806);

Object.keys(_TabsListUnstyled2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabsListUnstyled2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabsListUnstyled2[key];
    }
  });
});

var _tabsListUnstyledClasses = _interopRequireWildcard(__webpack_require__(20497));

Object.keys(_tabsListUnstyledClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tabsListUnstyledClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tabsListUnstyledClasses[key];
    }
  });
});

var _useTabsList = _interopRequireDefault(__webpack_require__(17004));

var _useTabsList2 = __webpack_require__(14807);

Object.keys(_useTabsList2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useTabsList2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useTabsList2[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 20497:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getTabsListUnstyledUtilityClass = getTabsListUnstyledUtilityClass;

var _generateUtilityClass = _interopRequireDefault(__webpack_require__(7084));

var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(11469));

function getTabsListUnstyledUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('TabsListUnstyled', slot);
}

const tabsListUnstyledClasses = (0, _generateUtilityClasses.default)('TabsListUnstyled', ['root', 'horizontal', 'vertical']);
var _default = tabsListUnstyledClasses;
exports["default"] = _default;

/***/ }),

/***/ 17004:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _utils = __webpack_require__(77462);

var _reactIs = __webpack_require__(98729);

var _TabsUnstyled = __webpack_require__(90756);

var _extractEventHandlers = _interopRequireDefault(__webpack_require__(60389));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const nextItem = (list, item) => {
  if (!list) {
    return null;
  }

  if (list === item) {
    return list.firstChild;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }

  return list.firstChild;
};

const previousItem = (list, item) => {
  if (!list) {
    return null;
  }

  if (list === item) {
    return list.lastChild;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }

  return list.lastChild;
};

const moveFocus = (list, currentFocus, traversalFunction) => {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus);

  while (list && nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }

      wrappedOnce = true;
    } // Same logic as useAutocomplete.js


    const nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';

    if (!nextFocus.hasAttribute('tabindex') || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus);
    } else {
      nextFocus.focus();
      return;
    }
  }
};

const useTabsList = parameters => {
  const {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    children,
    ref
  } = parameters;
  const tabsListRef = /*#__PURE__*/React.createRef();
  const handleRef = (0, _utils.unstable_useForkRef)(tabsListRef, ref);
  const context = (0, _TabsUnstyled.useTabContext)();

  if (context === null) {
    throw new Error('No TabContext provided');
  }

  const {
    value,
    orientation = 'horizontal',
    direction = 'ltr'
  } = context;
  const isRtl = direction === 'rtl';

  const handleKeyDown = event => {
    const list = tabsListRef.current;
    const currentFocus = (0, _utils.unstable_ownerDocument)(list).activeElement; // Keyboard navigation assumes that [role="tab"] are siblings
    // though we might warn in the future about nested, interactive elements
    // as a a11y violation

    const role = currentFocus == null ? void 0 : currentFocus.getAttribute('role');

    if (role !== 'tab') {
      return;
    }

    let previousItemKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
    let nextItemKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';

    if (orientation === 'horizontal' && isRtl) {
      // swap previousItemKey with nextItemKey
      previousItemKey = 'ArrowRight';
      nextItemKey = 'ArrowLeft';
    }

    switch (event.key) {
      case previousItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, previousItem);
        break;

      case nextItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, nextItem);
        break;

      case 'Home':
        event.preventDefault();
        moveFocus(list, null, nextItem);
        break;

      case 'End':
        event.preventDefault();
        moveFocus(list, null, previousItem);
        break;

      default:
        break;
    }
  };

  const createHandleKeyDown = otherHandlers => event => {
    var _otherHandlers$onKeyD;

    handleKeyDown(event);
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null ? void 0 : _otherHandlers$onKeyD.call(otherHandlers, event);
  };

  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = (0, _extractEventHandlers.default)(parameters);
    const externalEventHandlers = (0, _extends2.default)({}, propsEventHandlers, otherHandlers);
    const ownEventHandlers = {
      onKeyDown: createHandleKeyDown(externalEventHandlers)
    };
    const mergedEventHandlers = (0, _extends2.default)({}, externalEventHandlers, ownEventHandlers);
    return (0, _extends2.default)({
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-orientation': orientation === 'vertical' ? 'vertical' : undefined,
      role: 'tablist',
      ref: handleRef
    }, mergedEventHandlers);
  };

  const processChildren = React.useCallback(() => {
    const valueToIndex = new Map();
    let childIndex = 0;
    const processedChildren = React.Children.map(children, child => {
      if (! /*#__PURE__*/React.isValidElement(child)) {
        return null;
      }

      if (false) {}

      const childValue = child.props.value === undefined ? childIndex : child.props.value;
      valueToIndex.set(childValue, childIndex);
      childIndex += 1;
      return /*#__PURE__*/React.cloneElement(child, (0, _extends2.default)({
        value: childValue
      }, childIndex === 1 && value === false && !child.props.tabIndex || value === childValue ? {
        tabIndex: 0
      } : {
        tabIndex: -1
      }));
    });
    return processedChildren;
  }, [children, value]);
  return {
    isRtl,
    orientation,
    value,
    processChildren,
    getRootProps
  };
};

var _default = useTabsList;
exports["default"] = _default;

/***/ }),

/***/ 14807:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 40390:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getPanelId = getPanelId;
exports.getTabId = getTabId;
exports.useTabContext = useTabContext;

var React = _interopRequireWildcard(__webpack_require__(67294));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @ignore - internal component.
 */
const Context = /*#__PURE__*/React.createContext(null);

if (false) {}
/**
 * @returns {unknown}
 */


function useTabContext() {
  return React.useContext(Context);
}

function getPanelId(context, value) {
  const {
    idPrefix
  } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-P-${value}`;
}

function getTabId(context, value) {
  const {
    idPrefix
  } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-T-${value}`;
}

var _default = Context;
exports["default"] = _default;

/***/ }),

/***/ 78516:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _clsx = _interopRequireDefault(__webpack_require__(57966));

var _utils = __webpack_require__(6443);

var _composeClasses = _interopRequireDefault(__webpack_require__(36630));

var _tabsUnstyledClasses = __webpack_require__(45530);

var _useTabs = _interopRequireDefault(__webpack_require__(86085));

var _TabsContext = _interopRequireDefault(__webpack_require__(40390));

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["children", "className", "value", "defaultValue", "orientation", "direction", "component", "components", "componentsProps", "onChange", "selectionFollowsFocus"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation]
  };
  return (0, _composeClasses.default)(slots, _tabsUnstyledClasses.getTabsUnstyledUtilityClass, {});
};
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base/react-tabs/)
 *
 * API:
 *
 * - [TabsUnstyled API](https://mui.com/base/api/tabs-unstyled/)
 */


const TabsUnstyled = /*#__PURE__*/React.forwardRef((props, ref) => {
  var _ref, _componentsProps$root;

  const {
    children,
    className,
    orientation = 'horizontal',
    direction = 'ltr',
    component,
    components = {},
    componentsProps = {}
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    tabsContextValue
  } = (0, _useTabs.default)(props);
  const ownerState = (0, _extends2.default)({}, props, {
    orientation,
    direction
  });
  const classes = useUtilityClasses(ownerState);
  const TabsRoot = (_ref = component != null ? component : components.Root) != null ? _ref : 'div';
  const tabsRootProps = (0, _utils.appendOwnerState)(TabsRoot, (0, _extends2.default)({}, other, componentsProps.root, {
    ref,
    className: (0, _clsx.default)(classes.root, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, className)
  }), ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TabsRoot, (0, _extends2.default)({}, tabsRootProps, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabsContext.default.Provider, {
      value: tabsContextValue,
      children: children
    })
  }));
});
 false ? 0 : void 0;
var _default = TabsUnstyled;
exports["default"] = _default;

/***/ }),

/***/ 97621:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 90756:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  TabsContext: true,
  tabsUnstyledClasses: true,
  useTabs: true
};
Object.defineProperty(exports, "TabsContext", ({
  enumerable: true,
  get: function () {
    return _TabsContext.default;
  }
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _TabsUnstyled.default;
  }
}));
Object.defineProperty(exports, "tabsUnstyledClasses", ({
  enumerable: true,
  get: function () {
    return _tabsUnstyledClasses.default;
  }
}));
Object.defineProperty(exports, "useTabs", ({
  enumerable: true,
  get: function () {
    return _useTabs.default;
  }
}));

var _TabsUnstyled = _interopRequireDefault(__webpack_require__(78516));

var _TabsContext = _interopRequireWildcard(__webpack_require__(40390));

Object.keys(_TabsContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabsContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabsContext[key];
    }
  });
});

var _tabsUnstyledClasses = _interopRequireWildcard(__webpack_require__(45530));

Object.keys(_tabsUnstyledClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tabsUnstyledClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tabsUnstyledClasses[key];
    }
  });
});

var _TabsUnstyled2 = __webpack_require__(97621);

Object.keys(_TabsUnstyled2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabsUnstyled2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabsUnstyled2[key];
    }
  });
});

var _useTabs = _interopRequireWildcard(__webpack_require__(86085));

Object.keys(_useTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useTabs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useTabs[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 45530:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getTabsUnstyledUtilityClass = getTabsUnstyledUtilityClass;

var _generateUtilityClass = _interopRequireDefault(__webpack_require__(7084));

var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(11469));

function getTabsUnstyledUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('TabsUnstyled', slot);
}

const tabsUnstyledClasses = (0, _generateUtilityClasses.default)('TabsUnstyled', ['root', 'horizontal', 'vertical']);
var _default = tabsUnstyledClasses;
exports["default"] = _default;

/***/ }),

/***/ 86085:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _utils = __webpack_require__(77462);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useTabs = parameters => {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    orientation,
    direction,
    selectionFollowsFocus
  } = parameters;
  const [value, setValue] = (0, _utils.unstable_useControlled)({
    controlled: valueProp,
    default: defaultValue,
    name: 'Tabs',
    state: 'value'
  });
  const idPrefix = (0, _utils.unstable_useId)();
  const onSelected = React.useCallback((e, newValue) => {
    setValue(newValue);

    if (onChange) {
      onChange(e, newValue);
    }
  }, [onChange, setValue]);
  const tabsContextValue = React.useMemo(() => {
    return {
      idPrefix,
      value,
      onSelected,
      orientation,
      direction,
      selectionFollowsFocus
    };
  }, [idPrefix, value, onSelected, orientation, direction, selectionFollowsFocus]);
  return {
    tabsContextValue
  };
};

var _default = useTabs;
exports["default"] = _default;

/***/ }),

/***/ 9221:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _reactDom = __webpack_require__(73935);

var _utils = __webpack_require__(77462);

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["onChange", "maxRows", "minRows", "style", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}

const styles = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};

function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}

const TextareaAutosize = /*#__PURE__*/React.forwardRef(function TextareaAutosize(props, ref) {
  const {
    onChange,
    maxRows,
    minRows = 1,
    style,
    value
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    current: isControlled
  } = React.useRef(value != null);
  const inputRef = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(ref, inputRef);
  const shadowRef = React.useRef(null);
  const renders = React.useRef(0);
  const [state, setState] = React.useState({});
  const getUpdatedState = React.useCallback(() => {
    const input = inputRef.current;
    const containerWindow = (0, _utils.unstable_ownerWindow)(input);
    const computedStyle = containerWindow.getComputedStyle(input); // If input's width is shrunk and it's not visible, don't sync height.

    if (computedStyle.width === '0px') {
      return {};
    }

    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || 'x';

    if (inputShallow.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += ' ';
    }

    const boxSizing = computedStyle['box-sizing'];
    const padding = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top');
    const border = getStyleValue(computedStyle, 'border-bottom-width') + getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

    const innerHeight = inputShallow.scrollHeight; // Measure height of a textarea with a single row

    inputShallow.value = 'x';
    const singleRowHeight = inputShallow.scrollHeight; // The height of the outer content

    let outerHeight = innerHeight;

    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }

    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }

    outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

    const outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle,
      overflow
    };
  }, [maxRows, minRows, props.placeholder]);

  const updateState = (prevState, newState) => {
    const {
      outerHeightStyle,
      overflow
    } = newState; // Need a large enough difference to update the height.
    // This prevents infinite rendering loop.

    if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
      renders.current += 1;
      return {
        overflow,
        outerHeightStyle
      };
    }

    if (false) {}

    return prevState;
  };

  const syncHeight = React.useCallback(() => {
    const newState = getUpdatedState();

    if (isEmpty(newState)) {
      return;
    }

    setState(prevState => {
      return updateState(prevState, newState);
    });
  }, [getUpdatedState]);

  const syncHeightWithFlushSycn = () => {
    const newState = getUpdatedState();

    if (isEmpty(newState)) {
      return;
    } // In React 18, state updates in a ResizeObserver's callback are happening after the paint which causes flickering
    // when doing some visual updates in it. Using flushSync ensures that the dom will be painted after the states updates happen
    // Related issue - https://github.com/facebook/react/issues/24331


    (0, _reactDom.flushSync)(() => {
      setState(prevState => {
        return updateState(prevState, newState);
      });
    });
  };

  React.useEffect(() => {
    const handleResize = (0, _utils.unstable_debounce)(() => {
      renders.current = 0; // If the TextareaAutosize component is replaced by Suspense with a fallback, the last
      // ResizeObserver's handler that runs because of the change in the layout is trying to
      // access a dom node that is no longer there (as the fallback component is being shown instead).
      // See https://github.com/mui/material-ui/issues/32640
      // TODO: Add tests that will ensure the component is not failing when
      // replaced by Suspense with a fallback, once React is updated to version 18

      if (inputRef.current) {
        syncHeightWithFlushSycn();
      }
    });
    const containerWindow = (0, _utils.unstable_ownerWindow)(inputRef.current);
    containerWindow.addEventListener('resize', handleResize);
    let resizeObserver;

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(inputRef.current);
    }

    return () => {
      handleResize.clear();
      containerWindow.removeEventListener('resize', handleResize);

      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  });
  (0, _utils.unstable_useEnhancedEffect)(() => {
    syncHeight();
  });
  React.useEffect(() => {
    renders.current = 0;
  }, [value]);

  const handleChange = event => {
    renders.current = 0;

    if (!isControlled) {
      syncHeight();
    }

    if (onChange) {
      onChange(event);
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", (0, _extends2.default)({
      value: value,
      onChange: handleChange,
      ref: handleRef // Apply the rows prop to get a "correct" first SSR paint
      ,
      rows: minRows,
      style: (0, _extends2.default)({
        height: state.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: state.overflow ? 'hidden' : null
      }, style)
    }, other)), /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: (0, _extends2.default)({}, styles.shadow, style, {
        padding: 0
      })
    })]
  });
});
 false ? 0 : void 0;
var _default = TextareaAutosize;
exports["default"] = _default;

/***/ }),

/***/ 55127:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _TextareaAutosize.default;
  }
}));

var _TextareaAutosize = _interopRequireDefault(__webpack_require__(9221));

/***/ }),

/***/ 93958:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _utils = __webpack_require__(77462);

var _jsxRuntime = __webpack_require__(85893);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */
// Inspired by https://github.com/focus-trap/tabbable
const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');

function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.


  if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }

  return node.tabIndex;
}

function isNonTabbableRadio(node) {
  if (node.tagName !== 'INPUT' || node.type !== 'radio') {
    return false;
  }

  if (!node.name) {
    return false;
  }

  const getRadio = selector => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);

  let roving = getRadio(`[name="${node.name}"]:checked`);

  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }

  return roving !== node;
}

function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
    return false;
  }

  return true;
}

function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);

    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }

    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
}

function defaultIsEnabled() {
  return true;
}
/**
 * Utility component that locks focus inside the component.
 */


function TrapFocus(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = React.useRef();
  const sentinelStart = React.useRef(null);
  const sentinelEnd = React.useRef(null);
  const nodeToRestore = React.useRef(null);
  const reactFocusEventTarget = React.useRef(null); // This variable is useful when disableAutoFocus is true.
  // It waits for the active element to move into the component to activate.

  const activated = React.useRef(false);
  const rootRef = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(children.ref, rootRef);
  const lastKeydown = React.useRef(null);
  React.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  React.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    const doc = (0, _utils.unstable_ownerDocument)(rootRef.current);

    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (false) {}

        rootRef.current.setAttribute('tabIndex', -1);
      }

      if (activated.current) {
        rootRef.current.focus();
      }
    }

    return () => {
      // restoreLastFocus()
      if (!disableRestoreFocus) {
        // In IE11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE11 have a focus method.
        // Once IE11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }

        nodeToRestore.current = null;
      }
    }; // Missing `disableRestoreFocus` which is fine.
    // We don't support changing that prop on an open TrapFocus
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  React.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    const doc = (0, _utils.unstable_ownerDocument)(rootRef.current);

    const contain = nativeEvent => {
      const {
        current: rootElement
      } = rootRef; // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.

      if (rootElement === null) {
        return;
      }

      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      if (!rootElement.contains(doc.activeElement)) {
        // if the focus event is not coming from inside the children's react tree, reset the refs
        if (nativeEvent && reactFocusEventTarget.current !== nativeEvent.target || doc.activeElement !== reactFocusEventTarget.current) {
          reactFocusEventTarget.current = null;
        } else if (reactFocusEventTarget.current !== null) {
          return;
        }

        if (!activated.current) {
          return;
        }

        let tabbable = [];

        if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
          tabbable = getTabbable(rootRef.current);
        }

        if (tabbable.length > 0) {
          var _lastKeydown$current, _lastKeydown$current2;

          const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === 'Tab');
          const focusNext = tabbable[0];
          const focusPrevious = tabbable[tabbable.length - 1];

          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        } else {
          rootElement.focus();
        }
      }
    };

    const loopFocus = nativeEvent => {
      lastKeydown.current = nativeEvent;

      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
        return;
      } // Make sure the next tab starts from the right place.
      // doc.activeElement referes to the origin.


      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;
        sentinelEnd.current.focus();
      }
    };

    doc.addEventListener('focusin', contain);
    doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    // Instead, we can look if the active element was restored on the BODY element.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

    const interval = setInterval(() => {
      if (doc.activeElement.tagName === 'BODY') {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener('focusin', contain);
      doc.removeEventListener('keydown', loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);

  const onFocus = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }

    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;

    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };

  const handleFocusSentinel = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }

    activated.current = true;
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      tabIndex: 0,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-test": "sentinelStart"
    }), /*#__PURE__*/React.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      tabIndex: 0,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-test": "sentinelEnd"
    })]
  });
}

 false ? 0 : void 0;

if (false) {}

var _default = TrapFocus;
exports["default"] = _default;

/***/ }),

/***/ 17042:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _TrapFocus.default;
  }
}));

var _TrapFocus = _interopRequireDefault(__webpack_require__(93958));

/***/ }),

/***/ 36630:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _utils.unstable_composeClasses;
  }
}));

var _utils = __webpack_require__(77462);

/***/ }),

/***/ 7084:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _utils.unstable_generateUtilityClass;
  }
}));

var _utils = __webpack_require__(77462);

/***/ }),

/***/ 11469:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _utils.unstable_generateUtilityClasses;
  }
}));

var _utils = __webpack_require__(77462);

/***/ }),

/***/ 22050:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license MUI v5.0.0-alpha.88
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  BadgeUnstyled: true,
  ButtonUnstyled: true,
  ClickAwayListener: true,
  unstable_composeClasses: true,
  generateUtilityClass: true,
  generateUtilityClasses: true,
  FormControlUnstyled: true,
  InputUnstyled: true,
  MenuUnstyled: true,
  MenuItemUnstyled: true,
  ModalUnstyled: true,
  MultiSelectUnstyled: true,
  NoSsr: true,
  OptionGroupUnstyled: true,
  OptionUnstyled: true,
  PopperUnstyled: true,
  Portal: true,
  SelectUnstyled: true,
  SliderUnstyled: true,
  SwitchUnstyled: true,
  TabPanelUnstyled: true,
  TabsListUnstyled: true,
  TabsUnstyled: true,
  TabUnstyled: true,
  TextareaAutosize: true,
  TrapFocus: true
};
Object.defineProperty(exports, "BadgeUnstyled", ({
  enumerable: true,
  get: function () {
    return _BadgeUnstyled.default;
  }
}));
Object.defineProperty(exports, "ButtonUnstyled", ({
  enumerable: true,
  get: function () {
    return _ButtonUnstyled.default;
  }
}));
Object.defineProperty(exports, "ClickAwayListener", ({
  enumerable: true,
  get: function () {
    return _ClickAwayListener.default;
  }
}));
Object.defineProperty(exports, "FormControlUnstyled", ({
  enumerable: true,
  get: function () {
    return _FormControlUnstyled.default;
  }
}));
Object.defineProperty(exports, "InputUnstyled", ({
  enumerable: true,
  get: function () {
    return _InputUnstyled.default;
  }
}));
Object.defineProperty(exports, "MenuItemUnstyled", ({
  enumerable: true,
  get: function () {
    return _MenuItemUnstyled.default;
  }
}));
Object.defineProperty(exports, "MenuUnstyled", ({
  enumerable: true,
  get: function () {
    return _MenuUnstyled.default;
  }
}));
Object.defineProperty(exports, "ModalUnstyled", ({
  enumerable: true,
  get: function () {
    return _ModalUnstyled.default;
  }
}));
Object.defineProperty(exports, "MultiSelectUnstyled", ({
  enumerable: true,
  get: function () {
    return _MultiSelectUnstyled.default;
  }
}));
Object.defineProperty(exports, "NoSsr", ({
  enumerable: true,
  get: function () {
    return _NoSsr.default;
  }
}));
Object.defineProperty(exports, "OptionGroupUnstyled", ({
  enumerable: true,
  get: function () {
    return _OptionGroupUnstyled.default;
  }
}));
Object.defineProperty(exports, "OptionUnstyled", ({
  enumerable: true,
  get: function () {
    return _OptionUnstyled.default;
  }
}));
Object.defineProperty(exports, "PopperUnstyled", ({
  enumerable: true,
  get: function () {
    return _PopperUnstyled.default;
  }
}));
Object.defineProperty(exports, "Portal", ({
  enumerable: true,
  get: function () {
    return _Portal.default;
  }
}));
Object.defineProperty(exports, "SelectUnstyled", ({
  enumerable: true,
  get: function () {
    return _SelectUnstyled.default;
  }
}));
Object.defineProperty(exports, "SliderUnstyled", ({
  enumerable: true,
  get: function () {
    return _SliderUnstyled.default;
  }
}));
Object.defineProperty(exports, "SwitchUnstyled", ({
  enumerable: true,
  get: function () {
    return _SwitchUnstyled.default;
  }
}));
Object.defineProperty(exports, "TabPanelUnstyled", ({
  enumerable: true,
  get: function () {
    return _TabPanelUnstyled.default;
  }
}));
Object.defineProperty(exports, "TabUnstyled", ({
  enumerable: true,
  get: function () {
    return _TabUnstyled.default;
  }
}));
Object.defineProperty(exports, "TabsListUnstyled", ({
  enumerable: true,
  get: function () {
    return _TabsListUnstyled.default;
  }
}));
Object.defineProperty(exports, "TabsUnstyled", ({
  enumerable: true,
  get: function () {
    return _TabsUnstyled.default;
  }
}));
Object.defineProperty(exports, "TextareaAutosize", ({
  enumerable: true,
  get: function () {
    return _TextareaAutosize.default;
  }
}));
Object.defineProperty(exports, "TrapFocus", ({
  enumerable: true,
  get: function () {
    return _TrapFocus.default;
  }
}));
Object.defineProperty(exports, "generateUtilityClass", ({
  enumerable: true,
  get: function () {
    return _generateUtilityClass.default;
  }
}));
Object.defineProperty(exports, "generateUtilityClasses", ({
  enumerable: true,
  get: function () {
    return _generateUtilityClasses.default;
  }
}));
Object.defineProperty(exports, "unstable_composeClasses", ({
  enumerable: true,
  get: function () {
    return _composeClasses.default;
  }
}));

var _utils = __webpack_require__(6443);

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _utils[key];
    }
  });
});

var _AutocompleteUnstyled = __webpack_require__(20540);

Object.keys(_AutocompleteUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _AutocompleteUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteUnstyled[key];
    }
  });
});

var _BadgeUnstyled = _interopRequireWildcard(__webpack_require__(61149));

Object.keys(_BadgeUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _BadgeUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BadgeUnstyled[key];
    }
  });
});

var _ButtonUnstyled = _interopRequireWildcard(__webpack_require__(64651));

Object.keys(_ButtonUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ButtonUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ButtonUnstyled[key];
    }
  });
});

var _ClickAwayListener = _interopRequireDefault(__webpack_require__(80357));

var _composeClasses = _interopRequireDefault(__webpack_require__(36630));

var _generateUtilityClass = _interopRequireWildcard(__webpack_require__(7084));

Object.keys(_generateUtilityClass).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _generateUtilityClass[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generateUtilityClass[key];
    }
  });
});

var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(11469));

var _FormControlUnstyled = _interopRequireWildcard(__webpack_require__(47735));

Object.keys(_FormControlUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _FormControlUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _FormControlUnstyled[key];
    }
  });
});

var _InputUnstyled = _interopRequireWildcard(__webpack_require__(47955));

Object.keys(_InputUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _InputUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _InputUnstyled[key];
    }
  });
});

var _ListboxUnstyled = __webpack_require__(31642);

Object.keys(_ListboxUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ListboxUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ListboxUnstyled[key];
    }
  });
});

var _MenuUnstyled = _interopRequireWildcard(__webpack_require__(31565));

Object.keys(_MenuUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MenuUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MenuUnstyled[key];
    }
  });
});

var _MenuItemUnstyled = _interopRequireWildcard(__webpack_require__(81730));

Object.keys(_MenuItemUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MenuItemUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MenuItemUnstyled[key];
    }
  });
});

var _ModalUnstyled = _interopRequireWildcard(__webpack_require__(60381));

Object.keys(_ModalUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ModalUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ModalUnstyled[key];
    }
  });
});

var _MultiSelectUnstyled = _interopRequireWildcard(__webpack_require__(76816));

Object.keys(_MultiSelectUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MultiSelectUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MultiSelectUnstyled[key];
    }
  });
});

var _NoSsr = _interopRequireDefault(__webpack_require__(41369));

var _OptionGroupUnstyled = _interopRequireWildcard(__webpack_require__(22349));

Object.keys(_OptionGroupUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _OptionGroupUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _OptionGroupUnstyled[key];
    }
  });
});

var _OptionUnstyled = _interopRequireWildcard(__webpack_require__(50450));

Object.keys(_OptionUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _OptionUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _OptionUnstyled[key];
    }
  });
});

var _PopperUnstyled = _interopRequireDefault(__webpack_require__(45264));

var _Portal = _interopRequireDefault(__webpack_require__(62418));

var _SelectUnstyled = _interopRequireWildcard(__webpack_require__(41776));

Object.keys(_SelectUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _SelectUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SelectUnstyled[key];
    }
  });
});

var _SliderUnstyled = _interopRequireWildcard(__webpack_require__(13162));

Object.keys(_SliderUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _SliderUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SliderUnstyled[key];
    }
  });
});

var _SwitchUnstyled = _interopRequireWildcard(__webpack_require__(111));

Object.keys(_SwitchUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _SwitchUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SwitchUnstyled[key];
    }
  });
});

var _TabPanelUnstyled = _interopRequireWildcard(__webpack_require__(37130));

Object.keys(_TabPanelUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabPanelUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabPanelUnstyled[key];
    }
  });
});

var _TabsListUnstyled = _interopRequireWildcard(__webpack_require__(37441));

Object.keys(_TabsListUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabsListUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabsListUnstyled[key];
    }
  });
});

var _TabsUnstyled = _interopRequireWildcard(__webpack_require__(90756));

Object.keys(_TabsUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabsUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabsUnstyled[key];
    }
  });
});

var _TabUnstyled = _interopRequireWildcard(__webpack_require__(23114));

Object.keys(_TabUnstyled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabUnstyled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabUnstyled[key];
    }
  });
});

var _TextareaAutosize = _interopRequireDefault(__webpack_require__(55127));

var _TrapFocus = _interopRequireDefault(__webpack_require__(17042));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 69182:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = appendOwnerState;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _isHostComponent = _interopRequireDefault(__webpack_require__(65311));

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
function appendOwnerState(elementType, otherProps = {}, ownerState) {
  if ((0, _isHostComponent.default)(elementType)) {
    return otherProps;
  }

  return (0, _extends2.default)({}, otherProps, {
    ownerState: (0, _extends2.default)({}, otherProps.ownerState, ownerState)
  });
}

/***/ }),

/***/ 29090:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = areArraysEqual;

function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}

/***/ }),

/***/ 60389:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = extractEventHandlers;

/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object, excludeKeys = []) {
  if (object === undefined) {
    return {};
  }

  const result = {};
  Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}

/***/ }),

/***/ 6443:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  appendOwnerState: true,
  areArraysEqual: true,
  extractEventHandlers: true,
  isHostComponent: true,
  resolveComponentProps: true,
  useSlotProps: true
};
Object.defineProperty(exports, "appendOwnerState", ({
  enumerable: true,
  get: function () {
    return _appendOwnerState.default;
  }
}));
Object.defineProperty(exports, "areArraysEqual", ({
  enumerable: true,
  get: function () {
    return _areArraysEqual.default;
  }
}));
Object.defineProperty(exports, "extractEventHandlers", ({
  enumerable: true,
  get: function () {
    return _extractEventHandlers.default;
  }
}));
Object.defineProperty(exports, "isHostComponent", ({
  enumerable: true,
  get: function () {
    return _isHostComponent.default;
  }
}));
Object.defineProperty(exports, "resolveComponentProps", ({
  enumerable: true,
  get: function () {
    return _resolveComponentProps.default;
  }
}));
Object.defineProperty(exports, "useSlotProps", ({
  enumerable: true,
  get: function () {
    return _useSlotProps.default;
  }
}));

var _appendOwnerState = _interopRequireDefault(__webpack_require__(69182));

var _areArraysEqual = _interopRequireDefault(__webpack_require__(29090));

var _extractEventHandlers = _interopRequireDefault(__webpack_require__(60389));

var _isHostComponent = _interopRequireDefault(__webpack_require__(65311));

var _resolveComponentProps = _interopRequireDefault(__webpack_require__(1828));

var _useSlotProps = _interopRequireDefault(__webpack_require__(72679));

var _types = __webpack_require__(10745);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

/***/ }),

/***/ 65311:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}

var _default = isHostComponent;
exports["default"] = _default;

/***/ }),

/***/ 94277:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = mergeSlotProps;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _clsx = _interopRequireDefault(__webpack_require__(57966));

var _extractEventHandlers = _interopRequireDefault(__webpack_require__(60389));

var _omitEventHandlers = _interopRequireDefault(__webpack_require__(66212));

/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on an unstyled component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `componentsProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;

  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = (0, _clsx.default)(externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className, className, additionalProps == null ? void 0 : additionalProps.className);
    const mergedStyle = (0, _extends2.default)({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props = (0, _extends2.default)({}, additionalProps, externalForwardedProps, externalSlotProps);

    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }

    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }

    return {
      props,
      internalRef: undefined
    };
  } // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.


  const eventHandlers = (0, _extractEventHandlers.default)((0, _extends2.default)({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = (0, _omitEventHandlers.default)(externalSlotProps);
  const otherPropsWithoutEventHandlers = (0, _omitEventHandlers.default)(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);
  const joinedClasses = (0, _clsx.default)(externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className, className, additionalProps == null ? void 0 : additionalProps.className, internalSlotProps == null ? void 0 : internalSlotProps.className);
  const mergedStyle = (0, _extends2.default)({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = (0, _extends2.default)({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);

  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }

  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }

  return {
    props,
    internalRef: internalSlotProps.ref
  };
}

/***/ }),

/***/ 66212:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = omitEventHandlers;

/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }

  const result = {};
  Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}

/***/ }),

/***/ 1828:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = resolveComponentProps;

/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState);
  }

  return componentProps;
}

/***/ }),

/***/ 10745:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 72679:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useSlotProps;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var _utils = __webpack_require__(77462);

var _appendOwnerState = _interopRequireDefault(__webpack_require__(69182));

var _mergeSlotProps = _interopRequireDefault(__webpack_require__(94277));

var _resolveComponentProps = _interopRequireDefault(__webpack_require__(1828));

const _excluded = ["elementType", "externalSlotProps", "ownerState"];

/**
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  var _parameters$additiona;

  const {
    elementType,
    externalSlotProps,
    ownerState
  } = parameters,
        rest = (0, _objectWithoutPropertiesLoose2.default)(parameters, _excluded);
  const resolvedComponentsProps = (0, _resolveComponentProps.default)(externalSlotProps, ownerState);
  const merged = (0, _mergeSlotProps.default)((0, _extends2.default)({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const props = (0, _appendOwnerState.default)(elementType, (0, _extends2.default)({}, merged.props, {
    ref: (0, _utils.unstable_useForkRef)(merged.internalRef, (0, _utils.unstable_useForkRef)(resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref))
  }), ownerState);
  return props;
}

/***/ }),

/***/ 44699:
/***/ ((__unused_webpack_module, exports) => {

/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;
if("function"===typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element");c=x("react.portal");d=x("react.fragment");e=x("react.strict_mode");f=x("react.profiler");g=x("react.provider");h=x("react.context");k=x("react.forward_ref");l=x("react.suspense");m=x("react.suspense_list");n=x("react.memo");p=x("react.lazy");q=x("react.block");r=x("react.server.block");u=x("react.fundamental");v=x("react.debug_trace_mode");w=x("react.legacy_hidden")}
function y(a){if("object"===typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type,a){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof,a){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}var z=g,A=b,B=k,C=d,D=p,E=n,F=c,G=f,H=e,I=l;exports.ContextConsumer=h;exports.ContextProvider=z;exports.Element=A;exports.ForwardRef=B;exports.Fragment=C;exports.Lazy=D;exports.Memo=E;exports.Portal=F;exports.Profiler=G;exports.StrictMode=H;
exports.Suspense=I;exports.isAsyncMode=function(){return!1};exports.isConcurrentMode=function(){return!1};exports.isContextConsumer=function(a){return y(a)===h};exports.isContextProvider=function(a){return y(a)===g};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};exports.isForwardRef=function(a){return y(a)===k};exports.isFragment=function(a){return y(a)===d};exports.isLazy=function(a){return y(a)===p};exports.isMemo=function(a){return y(a)===n};
exports.isPortal=function(a){return y(a)===c};exports.isProfiler=function(a){return y(a)===f};exports.isStrictMode=function(a){return y(a)===e};exports.isSuspense=function(a){return y(a)===l};exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===v||a===e||a===l||a===m||a===w||"object"===typeof a&&null!==a&&(a.$$typeof===p||a.$$typeof===n||a.$$typeof===g||a.$$typeof===h||a.$$typeof===k||a.$$typeof===u||a.$$typeof===q||a[0]===r)?!0:!1};
exports.typeOf=y;


/***/ }),

/***/ 98729:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(44699);
} else {}


/***/ }),

/***/ 17861:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
var _default = blue;
exports["default"] = _default;

/***/ }),

/***/ 87768:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const common = {
  black: '#000',
  white: '#fff'
};
var _default = common;
exports["default"] = _default;

/***/ }),

/***/ 48587:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
var _default = green;
exports["default"] = _default;

/***/ }),

/***/ 59611:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161'
};
var _default = grey;
exports["default"] = _default;

/***/ }),

/***/ 65861:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const lightBlue = {
  50: '#e1f5fe',
  100: '#b3e5fc',
  200: '#81d4fa',
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  600: '#039be5',
  700: '#0288d1',
  800: '#0277bd',
  900: '#01579b',
  A100: '#80d8ff',
  A200: '#40c4ff',
  A400: '#00b0ff',
  A700: '#0091ea'
};
var _default = lightBlue;
exports["default"] = _default;

/***/ }),

/***/ 25597:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
var _default = orange;
exports["default"] = _default;

/***/ }),

/***/ 70337:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff'
};
var _default = purple;
exports["default"] = _default;

/***/ }),

/***/ 4813:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
var _default = red;
exports["default"] = _default;

/***/ }),

/***/ 32208:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = createMixins;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

function createMixins(breakpoints, mixins) {
  return (0, _extends2.default)({
    toolbar: {
      minHeight: 56,
      [breakpoints.up('xs')]: {
        '@media (orientation: landscape)': {
          minHeight: 48
        }
      },
      [breakpoints.up('sm')]: {
        minHeight: 64
      }
    }
  }, mixins);
}

/***/ }),

/***/ 66632:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.dark = void 0;
exports["default"] = createPalette;
exports.light = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var _utils = __webpack_require__(77462);

var _system = __webpack_require__(43047);

var _common = _interopRequireDefault(__webpack_require__(87768));

var _grey = _interopRequireDefault(__webpack_require__(59611));

var _purple = _interopRequireDefault(__webpack_require__(70337));

var _red = _interopRequireDefault(__webpack_require__(4813));

var _orange = _interopRequireDefault(__webpack_require__(25597));

var _blue = _interopRequireDefault(__webpack_require__(17861));

var _lightBlue = _interopRequireDefault(__webpack_require__(65861));

var _green = _interopRequireDefault(__webpack_require__(48587));

const _excluded = ["mode", "contrastThreshold", "tonalOffset"];
const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.6)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _common.default.white,
    default: _common.default.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
exports.light = light;
const dark = {
  text: {
    primary: _common.default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#121212',
    default: '#121212'
  },
  action: {
    active: _common.default.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
exports.dark = dark;

function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0, _system.lighten)(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = (0, _system.darken)(intent.main, tonalOffsetDark);
    }
  }
}

function getDefaultPrimary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: _blue.default[200],
      light: _blue.default[50],
      dark: _blue.default[400]
    };
  }

  return {
    main: _blue.default[700],
    light: _blue.default[400],
    dark: _blue.default[800]
  };
}

function getDefaultSecondary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: _purple.default[200],
      light: _purple.default[50],
      dark: _purple.default[400]
    };
  }

  return {
    main: _purple.default[500],
    light: _purple.default[300],
    dark: _purple.default[700]
  };
}

function getDefaultError(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: _red.default[500],
      light: _red.default[300],
      dark: _red.default[700]
    };
  }

  return {
    main: _red.default[700],
    light: _red.default[400],
    dark: _red.default[800]
  };
}

function getDefaultInfo(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: _lightBlue.default[400],
      light: _lightBlue.default[300],
      dark: _lightBlue.default[700]
    };
  }

  return {
    main: _lightBlue.default[700],
    light: _lightBlue.default[500],
    dark: _lightBlue.default[900]
  };
}

function getDefaultSuccess(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: _green.default[400],
      light: _green.default[300],
      dark: _green.default[700]
    };
  }

  return {
    main: _green.default[800],
    light: _green.default[500],
    dark: _green.default[900]
  };
}

function getDefaultWarning(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: _orange.default[400],
      light: _orange.default[300],
      dark: _orange.default[700]
    };
  }

  return {
    main: '#ed6c02',
    // closest to orange[800] that pass 3:1.
    light: _orange.default[500],
    dark: _orange.default[900]
  };
}

function createPalette(palette) {
  const {
    mode = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette,
        other = (0, _objectWithoutPropertiesLoose2.default)(palette, _excluded);
  const primary = palette.primary || getDefaultPrimary(mode);
  const secondary = palette.secondary || getDefaultSecondary(mode);
  const error = palette.error || getDefaultError(mode);
  const info = palette.info || getDefaultInfo(mode);
  const success = palette.success || getDefaultSuccess(mode);
  const warning = palette.warning || getDefaultWarning(mode); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54

  function getContrastText(background) {
    const contrastText = (0, _system.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (false) {}

    return contrastText;
  }

  const augmentColor = ({
    color,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color = (0, _extends2.default)({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.hasOwnProperty('main')) {
      throw new Error( false ? 0 : (0, _utils.formatMuiErrorMessage)(11, name ? ` (${name})` : '', mainShade));
    }

    if (typeof color.main !== 'string') {
      throw new Error( false ? 0 : (0, _utils.formatMuiErrorMessage)(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  const modes = {
    dark,
    light
  };

  if (false) {}

  const paletteOutput = (0, _utils.deepmerge)((0, _extends2.default)({
    // A collection of common colors.
    common: (0, _extends2.default)({}, _common.default),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: 'primary'
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: 'secondary',
      mainShade: 'A400',
      lightShade: 'A200',
      darkShade: 'A700'
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: 'error'
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: 'warning'
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: 'info'
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: 'success'
    }),
    // The grey colors.
    grey: _grey.default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset
  }, modes[mode]), other);
  return paletteOutput;
}

/***/ }),

/***/ 15306:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createMuiTheme = createMuiTheme;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var _utils = __webpack_require__(77462);

var _base = __webpack_require__(22050);

var _system = __webpack_require__(43047);

var _createMixins = _interopRequireDefault(__webpack_require__(32208));

var _createPalette = _interopRequireDefault(__webpack_require__(66632));

var _createTypography = _interopRequireDefault(__webpack_require__(91494));

var _shadows = _interopRequireDefault(__webpack_require__(92782));

var _createTransitions = _interopRequireDefault(__webpack_require__(8667));

var _zIndex = _interopRequireDefault(__webpack_require__(42369));

const _excluded = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];

function createTheme(options = {}, ...args) {
  const {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options,
        other = (0, _objectWithoutPropertiesLoose2.default)(options, _excluded);
  const palette = (0, _createPalette.default)(paletteInput);
  const systemTheme = (0, _system.createTheme)(options);
  let muiTheme = (0, _utils.deepmerge)(systemTheme, {
    mixins: (0, _createMixins.default)(systemTheme.breakpoints, mixinsInput),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: _shadows.default.slice(),
    typography: (0, _createTypography.default)(palette, typographyInput),
    transitions: (0, _createTransitions.default)(transitionsInput),
    zIndex: (0, _extends2.default)({}, _zIndex.default)
  });
  muiTheme = (0, _utils.deepmerge)(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => (0, _utils.deepmerge)(acc, argument), muiTheme);

  if (false) {}

  return muiTheme;
}

let warnedOnce = false;

function createMuiTheme(...args) {
  if (false) {}

  return createTheme(...args);
}

var _default = createTheme;
exports["default"] = _default;

/***/ }),

/***/ 8667:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = createTransitions;
exports.easing = exports.duration = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

const _excluded = ["duration", "easing", "delay"];
// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
const easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

exports.easing = easing;
const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
exports.duration = duration;

function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}

function getAutoHeightDuration(height) {
  if (!height) {
    return 0;
  }

  const constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}

function createTransitions(inputTransitions) {
  const mergedEasing = (0, _extends2.default)({}, easing, inputTransitions.easing);
  const mergedDuration = (0, _extends2.default)({}, duration, inputTransitions.duration);

  const create = (props = ['all'], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0
    } = options,
          other = (0, _objectWithoutPropertiesLoose2.default)(options, _excluded);

    if (false) {}

    return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
  };

  return (0, _extends2.default)({
    getAutoHeightDuration,
    create
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}

/***/ }),

/***/ 91494:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = createTypography;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var _utils = __webpack_require__(77462);

const _excluded = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

const caseAllCaps = {
  textTransform: 'uppercase'
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  const _ref = typeof typography === 'function' ? typography(palette) : typography,
        {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2
  } = _ref,
        other = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  if (false) {}

  const coef = fontSize / 14;

  const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);

  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => (0, _extends2.default)({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight
  }, fontFamily === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing / size)}em`
  } : {}, casing, allVariants);

  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return (0, _utils.deepmerge)((0, _extends2.default)({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ 17601:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createTheme = _interopRequireDefault(__webpack_require__(15306));

const defaultTheme = (0, _createTheme.default)();
var _default = defaultTheme;
exports["default"] = _default;

/***/ }),

/***/ 92782:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;

function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var _default = shadows;
exports["default"] = _default;

/***/ }),

/***/ 86549:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.slotShouldForwardProp = exports.rootShouldForwardProp = exports["default"] = void 0;

var _system = __webpack_require__(43047);

var _defaultTheme = _interopRequireDefault(__webpack_require__(17601));

const rootShouldForwardProp = prop => (0, _system.shouldForwardProp)(prop) && prop !== 'classes';

exports.rootShouldForwardProp = rootShouldForwardProp;
const slotShouldForwardProp = _system.shouldForwardProp;
exports.slotShouldForwardProp = slotShouldForwardProp;
const styled = (0, _system.createStyled)({
  defaultTheme: _defaultTheme.default,
  rootShouldForwardProp
});
var _default = styled;
exports["default"] = _default;

/***/ }),

/***/ 76610:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useThemeProps;

var _system = __webpack_require__(43047);

var _defaultTheme = _interopRequireDefault(__webpack_require__(17601));

function useThemeProps({
  props,
  name
}) {
  return (0, _system.useThemeProps)({
    props,
    name,
    defaultTheme: _defaultTheme.default
  });
}

/***/ }),

/***/ 42369:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
const zIndex = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
var _default = zIndex;
exports["default"] = _default;

/***/ }),

/***/ 83113:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _utils = __webpack_require__(77462);

var _default = _utils.unstable_capitalize;
exports["default"] = _default;

/***/ }),

/***/ 10597:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _utils = __webpack_require__(77462);

var _default = _utils.unstable_useEventCallback;
exports["default"] = _default;

/***/ }),

/***/ 71695:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _utils = __webpack_require__(77462);

var _default = _utils.unstable_useForkRef;
exports["default"] = _default;

/***/ }),

/***/ 58543:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _utils = __webpack_require__(77462);

var _default = _utils.unstable_useIsFocusVisible;
exports["default"] = _default;

/***/ }),

/***/ 516:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @popperjs/core v2.11.6 - MIT License
 */



Object.defineProperty(exports, "__esModule", ({ value: true }));

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = (/* unused pure expression or super */ null && (['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options']));
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (false) {}

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (false) {}

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (false) {}

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var passive = {
  passive: true
};

function effect$2(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$2,
  data: {}
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (false) { var transitionProperty; }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$1(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$1,
  requires: ['computeStyles']
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;

    if (false) {}
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (false) {}

  if (!contains(state.elements.popper, arrowElement)) {
    if (false) {}

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var createPopper$1 = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers$1
}); // eslint-disable-next-line import/no-unused-modules

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

exports.applyStyles = applyStyles$1;
exports.arrow = arrow$1;
exports.computeStyles = computeStyles$1;
exports.createPopper = createPopper;
exports.createPopperLite = createPopper$1;
exports.defaultModifiers = defaultModifiers;
exports.detectOverflow = detectOverflow;
exports.eventListeners = eventListeners;
exports.flip = flip$1;
exports.hide = hide$1;
exports.offset = offset$1;
exports.popperGenerator = popperGenerator;
exports.popperOffsets = popperOffsets$1;
exports.preventOverflow = preventOverflow$1;
//# sourceMappingURL=popper.js.map


/***/ })

};
;