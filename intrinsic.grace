dialect "none"

// The intrinsic module.  This is the home for language elements that cannot
// be defined in Grace itself because they are beyond the descriptive power
// of the language.

var noneType := native "js" code ‹result = type_None;›

type None = noneType
