"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.m_combine_45tests = exports.m_fold = exports.m_filter = exports.m_flat_45map = exports.m_expr_46with_45path = exports.m_map = exports.m_get = exports.m_concat = exports.m_append = exports.m_last = exports.m_init = exports.m_test_45condition = exports.m_expr_46end = exports.m_expr_46start = exports.m_expr_46path = exports.m_list_45expr_63 = exports.m_not = exports.m_or = exports.m_and = exports.m_force = exports.m_defnrec = exports.m_defrec = exports.m_assert_45not = exports.m_assert = exports.m_extern = exports.m_fail = exports.m_failure = exports.m_nat_46dec = exports.m_nat_46inc = exports.m_nat_46_48_63 = exports.m_result_47match = exports.m_result_47depends = exports.m_result_47error = exports.m_unnull = exports.m_defn = exports.m__124 = exports.m__38 = exports.m_macrofn = exports.m_if = exports.m_apply_45vararg = exports.m_fix = exports.m_m_58test = exports.m_success = exports.m_delay = exports.m_list = exports.m_expr_47list = exports.m_expr_47symbol = exports.m_start_45position = exports.m_nat_46_49 = exports.m_nat_46_48 = exports.m_position_46char = exports.m_position_46line = exports.m_position = exports.m_list_45expr_46end = exports.m_list_45expr_46start = exports.m_list_45expr_46path = exports.m_list_45expr_46exprs = exports.m_list_45expr = exports.m_symbol_45expr_46end = exports.m_symbol_45expr_46start = exports.m_symbol_45expr_46path = exports.m_symbol_45expr_46name = exports.m_symbol_45expr_63 = exports.m_symbol_45expr = exports.m_cadr = exports.m_cadddr = exports.m_cdddr = exports.m_caddr = exports.m_cddr = exports.m_cdr = exports.m_second = exports.m_car = exports.m_type_45name = exports.m_first = exports.m_cons = exports.m_pair = exports.m_nil_63 = exports.m_desugar_45fn_45declaration = exports.m_nil = exports.m_result_47success = exports.m_null_63 = exports.m_left_63 = exports.m_some_63 = exports.m_right_63 = exports.m_empty_45heap = exports.m_null = exports.m_false = exports.m_true = exports.m_some = exports.m_right = exports.m_left = exports.m_with = exports.m_apply = exports.m_swap = exports.m_compose = exports.m_const = exports.m_unnormalize = exports.m_normalize = exports.m_id = exports.__to_m_symbol = void 0;
exports.m_fold_45compare = exports.m_compare_62_63 = exports.m_compare_60_63 = exports.m_default_45global_45env = exports.m_default_45local_45env = exports.m_compare_45symbol = exports.m_compare_45list = exports.m_compare_61_63 = exports.m_compare_45char = exports.m_compare_45nat = exports.m_compare_62 = exports.m_compare_60 = exports.m_compare_61 = exports.m_istream_46readln = exports.m_istream_46read = exports.m_parse_45unused = exports.m_desugar_45quote = exports.m_desugar_45should_45quote_63 = exports.m_pcond = exports.m_parse_45symbol = exports.m_let = exports.m_empty_45tree_45map = exports.m_tree_45map = exports.m_tree_45map_45node = exports.m_global_45variable = exports.m_local_45variable = exports.m_line_45number_45operation = exports.m_apply_45operation = exports.m_generate_45symbol_45literal_45expr = exports.m_nil_45operation = exports.m_symbol_45operation = exports.m_fn_45operation = exports.m_def_45operation = exports.m_if_45operation = exports.m_global_45variable_45operation = exports.m_local_45variable_45operation = exports.m_global_45env = exports.m_local_45env = exports.m_fn_45declaration = exports.m_def_45declaration = exports.m_degenerate = exports.m_generated = exports.m_generating = exports.m_new_45data = exports.m_new_45data_39 = exports.m_data = exports.m_derive = exports.m_tree_45map_45node_45nil_63 = exports.m_global_45variable_63 = exports.m_local_45variable_63 = exports.m_fn_45declaration_63 = exports.m_def_45declaration_63 = exports.m_degenerate_63 = exports.m_generated_63 = exports.m_generating_63 = exports.m_is_63 = exports.m_symbol_46_61 = exports.m_desugar_45quote_39 = exports.m_separator_63 = exports.m_whitespace_63 = exports.m_parse_45comment = exports.m_newline_63 = exports.m_char_46_61 = exports.m_nat_46_61 = exports.m_nat_46_62 = exports.m_nat_46_60 = exports.m_list_46_61 = exports.m_cond = exports.m_macro_45call_45expr = exports.m_run_45test = exports.m_ostream_46writeln = exports.m_ostream_46write = exports.m_symbol_46_43 = exports.m_tree_45map_45node_45nil = exports.m_object = exports.m_symbol_45_62list = exports.m_process_47sequence = exports.m_do = exports.m_run_45with = exports.m_then_45run = exports.m_then_45run_45with = exports.m_impure = exports.m_carriage_45return = exports.m_linefeed = exports.m_tab = exports.m_space = exports.m_backslash = exports.m_slash = exports.m_quote = exports.m_dot = exports.m_semicolon = exports.m_close_45parentheses = exports.m_open_45parentheses = exports.m_char_45_62nat = exports.m_nat_46_45 = exports.m_next_45line = exports.m_next_45char = exports.m_nat_46_43 = exports.m_reverse = exports.m_reverse_39 = void 0;
exports.m_line_45number_45operation_46line = exports.m_operation_46fold = exports.m_interpret_45line_45number_45operation = exports.m_get_45backend = exports.m_m_45backend = exports.m_desugar_45declarations = exports.m_desugar_45declaration = exports.m_desugar_45def_45declaration = exports.m_desugar_45operation = exports.m_desugar_45line_45number_45operation = exports.m_line_45number_45operation_46operation = exports.m_desugar_45apply_45operation = exports.m_interpret_45apply_45operation = exports.m_apply_45operation_46arg = exports.m_apply_45operation_46fn = exports.m_desugar_45symbol_45operation = exports.m_interpret_45symbol_45operation = exports.m_symbol_45operation_46name = exports.m_fn_45operation_46closures = exports.m_desugar_45fn_45operation = exports.m_fn_45operation_46value = exports.m_fn_45operation_46arg = exports.m_fn_45operation_46name = exports.m_fn_45operation_46path = exports.m_def_45operation_46value = exports.m_def_45operation_46path = exports.m_desugar_45def_45operation = exports.m_def_45operation_46name = exports.m_interpret_45if_45operation = exports.m_if_45operation_46false = exports.m_if_45operation_46true = exports.m_if_45operation_46cond = exports.m_global_45variable_45operation_46path = exports.m_desugar_45global_45variable_45operation = exports.m_global_45variable_45operation_46name = exports.m_interpret_45local_45variable_45operation = exports.m_local_45variable_45operation_46index = exports.m_desugar_45local_45variable_45operation = exports.m_local_45variable_45operation_46name = exports.m_global_45env_46with_45globals = exports.m_global_45env_46with_45heap = exports.m_global_45env_46with_45dependents = exports.m_global_45env_46index = exports.m_global_45env_46with_45index = exports.m_global_45env_46dependents = exports.m_global_45env_46heap = exports.m_global_45env_46globals = exports.m_local_45env_46with_45locals = exports.m_local_45env_46def = exports.m_local_45env_46with_45def = exports.m_local_45env_46locals = exports.m_declaration_46value = exports.m_fn_45declaration_46value = exports.m_fn_45declaration_46closures = exports.m_fn_45declaration_46path = exports.m_declaration_46name = exports.m_fn_45declaration_46name = exports.m_def_45declaration_46value = exports.m_mpm_45put_45refs = exports.m_put_45refs = exports.m_def_45declaration_46path = exports.m_def_45declaration_46name = exports.m_generate_45apply_45expr = exports.m_generate_45apply_45expr_39 = exports.m_generate_45result_46global_45env = exports.m_degenerate_46global_45env = exports.m_write_45result = exports.m_generate_45result_46combine = exports.m_degenerate_46combine = exports.m_generating_46combine = exports.m_generated_46combine = exports.m_degenerate_46with_45global_45env = exports.m_degenerate_46errors = exports.m_generated_46global_45env = exports.m_generated_46declarations = exports.m_generated_46operation = exports.m_generated_45resolve_45generating = exports.m_generating_46continue = exports.m_generating_46global_45env = exports.m_generating_46dependencies = exports.m_field = exports.m_as = exports.m_generate_45result_46match = exports.m_parse = exports.m_repl_45parse = exports.m_parse_45expr = exports.m_parse_45list = exports.m_parse_45symbol_45literal = exports.m_error = exports.m_mpm_45put_45srcs = exports.m_put_45srcs = exports.m_mpm_45get_45src = exports.m_get_45src = exports.m_mpm_45get_45ref = exports.m_get_45ref = exports.m_mpm_45src_45root = exports.m_src_45root = exports.m_mpm_45ref_45root = exports.m_ref_45root = exports.m_file_46local_45file = void 0;
exports.m_ = exports.m_run_45repl = exports.m_repl = exports.m_run_45compile = exports.m_run_45mpm_45put = exports.m_generate = exports.m_mpm_45resolve_45generate_45result = exports.m_mpm_45resolve_45generate_45result_39 = exports.m_mpm_45resolve_45generated = exports.m_mpm_45resolve_45generating = exports.m_mpm_45resolve_45dependencies = exports.m_resolve_45dependencies = exports.m_generate_45exprs = exports.m_generate_45exprs_39 = exports.m_generate_45expr = exports.m_generate_45list_45expr = exports.m_generate_45macro_63_45expr = exports.m_generate_45macro_45apply_45expr = exports.m_repl_45interpret_45declarations = exports.m_interpret_45declarations = exports.m_interpret_45declaration = exports.m_generate_45fn_45expr = exports.m_generate_45fn_45expr_39 = exports.m_interpret_45fn_45declaration = exports.m_generate_45macro_45expr = exports.m_generate_45def_45expr = exports.m_generate_45global_45expr = exports.m_generate_45global_45expr_39 = exports.m_interpret_45def_45declaration = exports.m_repl_45interpret_45operation = exports.m_interpret_45operation = exports.m_interpret_45operation_39 = exports.m_interpret_45fn_45operation = exports.m_interpret_45def_45operation = exports.m_interpret_45global_45variable_45operation = exports.m_heap_46get = exports.m_closures = exports.m_closures_39 = exports.m_tree_45map_46_43 = exports.m_generating_45_62generated = exports.m_generate_45fn_45expr_45closures = exports.m_parse_45file = exports.m_file_45_62tree_45map = exports.m_file_45_62tree_45map_39 = exports.m_tree_45map_46put = exports.m_tree_45map_46remove = exports.m_global_45env_46unresolved = exports.m_global_45env_45_62env = exports.m_generate_45symbol_45expr = exports.m_env_46get = exports.m_tree_45map_46get = exports.m_tree_45map_46compare = exports.m_tree_45map_45_62list = exports.m_tree_45map_46fold = exports.m_tree_45map_46node = exports.m_tree_45map_45node_46fold = exports.m_tree_45map_45node_46put = exports.m_tree_45map_45node_46remove = exports.m_tree_45map_45node_46get = exports.m_tree_45map_45node_46value = exports.m_tree_45map_45node_46key = exports.m_tree_45map_45node_46right = exports.m_tree_45map_45node_46min_45node = exports.m_tree_45map_45node_46left = exports.m_global_45variable_46macro_63 = exports.m_generate_45symbol_45expr_39 = exports.m_global_45variable_46path = exports.m_global_45variable_46name = exports.m_local_45variable_46index = exports.m_local_45variable_46name = void 0;

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _Symbol =
/*#__PURE__*/
function () {
  function _Symbol(symbol) {
    _classCallCheck(this, _Symbol);

    this.symbol = symbol;
  }

  _createClass(_Symbol, [{
    key: "apply",
    value: function apply(args) {
      console.log(this.symbol);
      return this;
    }
  }]);

  return _Symbol;
}();

var __to_m_symbol = function __to_m_symbol(symbol) {
  return new _Symbol(symbol);
};

exports.__to_m_symbol = __to_m_symbol;

var m_id = function m_id(m_x) {
  return m_x;
};

exports.m_id = m_id;
var m_normalize = m_id;
exports.m_normalize = m_normalize;
var m_unnormalize = m_id;
exports.m_unnormalize = m_unnormalize;

var m_const = function m_const(m_x) {
  return function (m__95) {
    return m_x;
  };
};

exports.m_const = m_const;

var m_compose = function m_compose(m_f) {
  return function (m_g) {
    return function (m_x) {
      return m_f.apply(null, [m_g.apply(null, [m_x])]);
    };
  };
};

exports.m_compose = m_compose;

var m_swap = function m_swap(m_f) {
  return function (m_x) {
    return function (m_y) {
      return m_f.apply(null, [m_y]).apply(null, [m_x]);
    };
  };
};

exports.m_swap = m_swap;

var m_apply = function m_apply(m_f) {
  return function (m_x) {
    return m_f.apply(null, [m_x]);
  };
};

exports.m_apply = m_apply;
var m_with = m_swap.apply(null, [m_apply]);
exports.m_with = m_with;

var m_left = function m_left(m_value) {
  return function (m_f) {
    return function (m__95) {
      return m_f.apply(null, [m_value]);
    };
  };
};

exports.m_left = m_left;

var m_right = function m_right(m_value) {
  return function (m__95) {
    return function (m_f) {
      return m_f.apply(null, [m_value]);
    };
  };
};

exports.m_right = m_right;
var m_some = m_right;
exports.m_some = m_some;

var m_true = function m_true(m_x) {
  return function (m__95) {
    return m_x;
  };
};

exports.m_true = m_true;

var m_false = function m_false(m__95) {
  return function (m_x) {
    return m_x;
  };
};

exports.m_false = m_false;
var m_null = m_left.apply(null, [m_false]);
exports.m_null = m_null;
var m_empty_45heap = m_const.apply(null, [m_null]);
exports.m_empty_45heap = m_empty_45heap;

var m_right_63 = function m_right_63(m_either) {
  return m_either.apply(null, [m_const.apply(null, [m_false])]).apply(null, [m_const.apply(null, [m_true])]);
};

exports.m_right_63 = m_right_63;
var m_some_63 = m_right_63;
exports.m_some_63 = m_some_63;

var m_left_63 = function m_left_63(m_either) {
  return m_either.apply(null, [m_const.apply(null, [m_true])]).apply(null, [m_const.apply(null, [m_false])]);
};

exports.m_left_63 = m_left_63;
var m_null_63 = m_left_63;
exports.m_null_63 = m_null_63;

var m_result_47success = function m_result_47success(m_expr) {
  return m_left.apply(null, [m_expr]);
};

exports.m_result_47success = m_result_47success;
var m_nil = m_false;
exports.m_nil = m_nil;
var m_desugar_45fn_45declaration = m_const.apply(null, [m_nil]);
exports.m_desugar_45fn_45declaration = m_desugar_45fn_45declaration;

var m_nil_63 = function m_nil_63(m_list) {
  return m_list.apply(null, [m_const.apply(null, [m_const.apply(null, [m_const.apply(null, [m_false])])])]).apply(null, [m_true]);
};

exports.m_nil_63 = m_nil_63;

var m_pair = function m_pair(m_first) {
  return function (m_second) {
    return function (m_bool) {
      return m_bool.apply(null, [m_first]).apply(null, [m_second]);
    };
  };
};

exports.m_pair = m_pair;
var m_cons = m_pair;
exports.m_cons = m_cons;

var m_first = function m_first(m_pair) {
  return m_pair.apply(null, [m_true]);
};

exports.m_first = m_first;
var m_type_45name = m_first;
exports.m_type_45name = m_type_45name;
var m_car = m_first;
exports.m_car = m_car;

var m_second = function m_second(m_pair) {
  return m_pair.apply(null, [m_false]);
};

exports.m_second = m_second;
var m_cdr = m_second;
exports.m_cdr = m_cdr;
var m_cddr = m_compose.apply(null, [m_cdr]).apply(null, [m_cdr]);
exports.m_cddr = m_cddr;
var m_caddr = m_compose.apply(null, [m_car]).apply(null, [m_cddr]);
exports.m_caddr = m_caddr;
var m_cdddr = m_compose.apply(null, [m_cdr]).apply(null, [m_cddr]);
exports.m_cdddr = m_cdddr;
var m_cadddr = m_compose.apply(null, [m_car]).apply(null, [m_cdddr]);
exports.m_cadddr = m_cadddr;
var m_cadr = m_compose.apply(null, [m_car]).apply(null, [m_cdr]);
exports.m_cadr = m_cadr;

var m_symbol_45expr = function m_symbol_45expr(m_name) {
  return function (m_path) {
    return function (m_start) {
      return function (m_end) {
        return m_pair.apply(null, [m_true]).apply(null, [m_cons.apply(null, [m_name]).apply(null, [m_cons.apply(null, [m_path]).apply(null, [m_cons.apply(null, [m_start]).apply(null, [m_cons.apply(null, [m_end]).apply(null, [m_nil])])])])]);
      };
    };
  };
};

exports.m_symbol_45expr = m_symbol_45expr;
var m_symbol_45expr_63 = m_first;
exports.m_symbol_45expr_63 = m_symbol_45expr_63;
var m_symbol_45expr_46name = m_compose.apply(null, [m_car]).apply(null, [m_second]);
exports.m_symbol_45expr_46name = m_symbol_45expr_46name;
var m_symbol_45expr_46path = m_compose.apply(null, [m_cadr]).apply(null, [m_second]);
exports.m_symbol_45expr_46path = m_symbol_45expr_46path;
var m_symbol_45expr_46start = m_compose.apply(null, [m_caddr]).apply(null, [m_second]);
exports.m_symbol_45expr_46start = m_symbol_45expr_46start;
var m_symbol_45expr_46end = m_compose.apply(null, [m_cadddr]).apply(null, [m_second]);
exports.m_symbol_45expr_46end = m_symbol_45expr_46end;

var m_list_45expr = function m_list_45expr(m_exprs) {
  return function (m_path) {
    return function (m_start) {
      return function (m_end) {
        return m_pair.apply(null, [m_false]).apply(null, [m_cons.apply(null, [m_exprs]).apply(null, [m_cons.apply(null, [m_path]).apply(null, [m_cons.apply(null, [m_start]).apply(null, [m_cons.apply(null, [m_end]).apply(null, [m_nil])])])])]);
      };
    };
  };
};

exports.m_list_45expr = m_list_45expr;
var m_list_45expr_46exprs = m_compose.apply(null, [m_car]).apply(null, [m_second]);
exports.m_list_45expr_46exprs = m_list_45expr_46exprs;
var m_list_45expr_46path = m_compose.apply(null, [m_cadr]).apply(null, [m_second]);
exports.m_list_45expr_46path = m_list_45expr_46path;
var m_list_45expr_46start = m_compose.apply(null, [m_caddr]).apply(null, [m_second]);
exports.m_list_45expr_46start = m_list_45expr_46start;
var m_list_45expr_46end = m_compose.apply(null, [m_cadddr]).apply(null, [m_second]);
exports.m_list_45expr_46end = m_list_45expr_46end;
var m_position = m_pair;
exports.m_position = m_position;
var m_position_46line = m_first;
exports.m_position_46line = m_position_46line;
var m_position_46char = m_second;
exports.m_position_46char = m_position_46char;

var m_nat_46_48 = function m_nat_46_48(m_f) {
  return function (m_x) {
    return m_x;
  };
};

exports.m_nat_46_48 = m_nat_46_48;

var m_nat_46_49 = function m_nat_46_49(m_f) {
  return function (m_x) {
    return m_f.apply(null, [m_x]);
  };
};

exports.m_nat_46_49 = m_nat_46_49;
var m_start_45position = m_position.apply(null, [m_nat_46_49]).apply(null, [m_nat_46_49]);
exports.m_start_45position = m_start_45position;

var m_expr_47symbol = function m_expr_47symbol(m_name) {
  return m_symbol_45expr.apply(null, [m_name]).apply(null, [__to_m_symbol('expr.m')]).apply(null, [m_start_45position]).apply(null, [m_start_45position]);
};

exports.m_expr_47symbol = m_expr_47symbol;

var m_expr_47list = function m_expr_47list(m_exprs) {
  return m_list_45expr.apply(null, [m_exprs]).apply(null, [__to_m_symbol('expr.m')]).apply(null, [m_start_45position]).apply(null, [m_start_45position]);
};

exports.m_expr_47list = m_expr_47list;

var m_list = function m_list(m_env) {
  return function (m_exprs) {
    return m_result_47success.apply(null, [m_nil_63.apply(null, [m_exprs]).apply(null, [m_const.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('nil')])])]).apply(null, [function (m__95) {
      return m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('cons')])]).apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('list')])]).apply(null, [m_cdr.apply(null, [m_exprs])])])]).apply(null, [m_nil])])])]);
    }]).apply(null, [m_nil])]);
  };
};

exports.m_list = m_list;

var m_delay = function m_delay(m_env) {
  return function (m_exprs) {
    return m_result_47success.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('fn')])]).apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('_')])]).apply(null, [m_exprs])])])]);
  };
};

exports.m_delay = m_delay;
var m_success = m_left.apply(null, [m_nil]);
exports.m_success = m_success;

var m_m_58test = function m_m_58test(m__95) {
  return m_success;
};

exports.m_m_58test = m_m_58test;

var m_fix = function m_fix(m_f) {
  return function (m_x) {
    return m_f.apply(null, [function (m_v) {
      return m_x.apply(null, [m_x]).apply(null, [m_v]);
    }]);
  }.apply(null, [function (m_x) {
    return m_f.apply(null, [function (m_v) {
      return m_x.apply(null, [m_x]).apply(null, [m_v]);
    }]);
  }]);
};

exports.m_fix = m_fix;

var m_apply_45vararg = function m_apply_45vararg(m_env) {
  return function (m_exprs) {
    return m_result_47success.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('list')])]).apply(null, [m_cdr.apply(null, [m_exprs])])])]).apply(null, [m_nil])])])]);
  };
};

exports.m_apply_45vararg = m_apply_45vararg;

var m_if = function m_if(m_env) {
  return function (m_exprs) {
    return m_result_47success.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('force')])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('delay')])]).apply(null, [m_cons.apply(null, [m_cadr.apply(null, [m_exprs])]).apply(null, [m_nil])])])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('delay')])]).apply(null, [m_cons.apply(null, [m_caddr.apply(null, [m_exprs])]).apply(null, [m_nil])])])]).apply(null, [m_nil])])])])]).apply(null, [m_nil])])])]);
  };
};

exports.m_if = m_if;

var m_macrofn = function m_macrofn(m_env) {
  return function (m_exprs) {
    return m_result_47success.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('macro')])]).apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('fn')])]).apply(null, [m_cdr.apply(null, [m_exprs])])])]).apply(null, [m_nil])])])])]);
  };
};

exports.m_macrofn = m_macrofn;

var m__38 = function m__38(m_env) {
  return function (m_exprs) {
    return m_result_47success.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('and')])]).apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('delay')])]).apply(null, [m_cons.apply(null, [m_cadr.apply(null, [m_exprs])]).apply(null, [m_nil])])])]).apply(null, [m_nil])])])])]);
  };
};

exports.m__38 = m__38;

var m__124 = function m__124(m_env) {
  return function (m_exprs) {
    return m_result_47success.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('or')])]).apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('delay')])]).apply(null, [m_cons.apply(null, [m_cadr.apply(null, [m_exprs])]).apply(null, [m_nil])])])]).apply(null, [m_nil])])])])]);
  };
};

exports.m__124 = m__124;

var m_defn = function m_defn(m_env) {
  return function (m_exprs) {
    return m_result_47success.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('def')])]).apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('fn')])]).apply(null, [m_cdr.apply(null, [m_exprs])])])]).apply(null, [m_nil])])])])]);
  };
};

exports.m_defn = m_defn;

var m_unnull = function m_unnull(m_either) {
  return m_either.apply(null, [m_id]).apply(null, [m_id]);
};

exports.m_unnull = m_unnull;

var m_result_47error = function m_result_47error(m_error) {
  return m_right.apply(null, [m_left.apply(null, [m_error])]);
};

exports.m_result_47error = m_result_47error;

var m_result_47depends = function m_result_47depends(m_dependencies) {
  return m_right.apply(null, [m_right.apply(null, [m_dependencies])]);
};

exports.m_result_47depends = m_result_47depends;

var m_result_47match = function m_result_47match(m_result) {
  return function (m_success) {
    return function (m_error) {
      return function (m_depends) {
        return m_result.apply(null, [m_success]).apply(null, [function (m_fail) {
          return m_fail.apply(null, [m_error]).apply(null, [m_depends]);
        }]);
      };
    };
  };
};

exports.m_result_47match = m_result_47match;

var m_nat_46_48_63 = function m_nat_46_48_63(m_n) {
  return m_n.apply(null, [m_const.apply(null, [m_true])]).apply(null, [m_false]);
};

exports.m_nat_46_48_63 = m_nat_46_48_63;

var m_nat_46inc = function m_nat_46inc(m_n) {
  return function (m_f) {
    return function (m_x) {
      return m_f.apply(null, [m_n.apply(null, [m_f]).apply(null, [m_x])]);
    };
  };
};

exports.m_nat_46inc = m_nat_46inc;

var m_nat_46dec = function m_nat_46dec(m_n) {
  return function (m_f) {
    return function (m_x) {
      return m_n.apply(null, [function (m_g) {
        return function (m_h) {
          return m_h.apply(null, [m_g.apply(null, [m_f])]);
        };
      }]).apply(null, [m_const.apply(null, [m_x])]).apply(null, [m_id]);
    };
  };
};

exports.m_nat_46dec = m_nat_46dec;

var m_failure = function m_failure(m_messages) {
  return m_right.apply(null, [m_messages]);
};

exports.m_failure = m_failure;

var m_fail = function m_fail(m_message) {
  return m_failure.apply(null, [m_cons.apply(null, [m_message]).apply(null, [m_nil])]);
};

exports.m_fail = m_fail;

var m_extern = function m_extern(m_env) {
  return function (m_exprs) {
    return m_result_47success.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('def')])]).apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_nil])])])])]);
  };
};

exports.m_extern = m_extern;

var m_assert = function m_assert(m_env) {
  return function (m_exprs) {
    return m_result_47success.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('delay')])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('test-condition')])]).apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('symbol')])]).apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('Assertion failed')])]).apply(null, [m_nil])])])]).apply(null, [m_nil])])])])]).apply(null, [m_nil])])])]);
  };
};

exports.m_assert = m_assert;

var m_assert_45not = function m_assert_45not(m_env) {
  return function (m_exprs) {
    return m_result_47success.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('assert')])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('not')])]).apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_nil])])])]).apply(null, [m_nil])])])]);
  };
};

exports.m_assert_45not = m_assert_45not;

var m_defrec = function m_defrec(m_env) {
  return function (m_exprs) {
    return m_result_47success.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('def')])]).apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('fix')])]).apply(null, [m_cons.apply(null, [m_cadr.apply(null, [m_exprs])]).apply(null, [m_nil])])])]).apply(null, [m_nil])])])])]);
  };
};

exports.m_defrec = m_defrec;

var m_defnrec = function m_defnrec(m_env) {
  return function (m_exprs) {
    return m_result_47success.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('defrec')])]).apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('fn')])]).apply(null, [m_exprs])])]).apply(null, [m_nil])])])])]);
  };
};

exports.m_defnrec = m_defnrec;

var m_force = function m_force(m_env) {
  return function (m_exprs) {
    return m_result_47success.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('nil')])]).apply(null, [m_nil])])])]);
  };
};

exports.m_force = m_force;

var m_and = function m_and(m_x) {
  return function (m_y) {
    return m_x.apply(null, [function (m__95) {
      return m_y.apply(null, [m_nil]);
    }]).apply(null, [function (m__95) {
      return m_false;
    }]).apply(null, [m_nil]);
  };
};

exports.m_and = m_and;

var m_or = function m_or(m_x) {
  return function (m_y) {
    return m_x.apply(null, [function (m__95) {
      return m_true;
    }]).apply(null, [function (m__95) {
      return m_y.apply(null, [m_nil]);
    }]).apply(null, [m_nil]);
  };
};

exports.m_or = m_or;

var m_not = function m_not(m_x) {
  return m_x.apply(null, [function (m__95) {
    return m_false;
  }]).apply(null, [function (m__95) {
    return m_true;
  }]).apply(null, [m_nil]);
};

exports.m_not = m_not;
var m_list_45expr_63 = m_compose.apply(null, [m_not]).apply(null, [m_first]);
exports.m_list_45expr_63 = m_list_45expr_63;

var m_expr_46path = function m_expr_46path(m_expr) {
  return m_list_45expr_63.apply(null, [m_expr]).apply(null, [function (m__95) {
    return m_list_45expr_46path.apply(null, [m_expr]);
  }]).apply(null, [function (m__95) {
    return m_symbol_45expr_46path.apply(null, [m_expr]);
  }]).apply(null, [m_nil]);
};

exports.m_expr_46path = m_expr_46path;

var m_expr_46start = function m_expr_46start(m_expr) {
  return m_list_45expr_63.apply(null, [m_expr]).apply(null, [function (m__95) {
    return m_list_45expr_46start.apply(null, [m_expr]);
  }]).apply(null, [function (m__95) {
    return m_symbol_45expr_46start.apply(null, [m_expr]);
  }]).apply(null, [m_nil]);
};

exports.m_expr_46start = m_expr_46start;

var m_expr_46end = function m_expr_46end(m_expr) {
  return m_list_45expr_63.apply(null, [m_expr]).apply(null, [function (m__95) {
    return m_list_45expr_46end.apply(null, [m_expr]);
  }]).apply(null, [function (m__95) {
    return m_symbol_45expr_46end.apply(null, [m_expr]);
  }]).apply(null, [m_nil]);
};

exports.m_expr_46end = m_expr_46end;

var m_test_45condition = function m_test_45condition(m_condition) {
  return function (m_message) {
    return m_condition.apply(null, [function (m__95) {
      return m_success;
    }]).apply(null, [function (m__95) {
      return m_fail.apply(null, [m_message]);
    }]).apply(null, [m_nil]);
  };
};

exports.m_test_45condition = m_test_45condition;
var m_init = m_fix.apply(null, [function (m_init) {
  return function (m_list) {
    return m_nil_63.apply(null, [m_cdr.apply(null, [m_list])]).apply(null, [function (m__95) {
      return m_nil;
    }]).apply(null, [function (m__95) {
      return m_cons.apply(null, [m_car.apply(null, [m_list])]).apply(null, [m_init.apply(null, [m_cdr.apply(null, [m_list])])]);
    }]).apply(null, [m_nil]);
  };
}]);
exports.m_init = m_init;
var m_last = m_fix.apply(null, [function (m_last) {
  return function (m_list) {
    return m_nil_63.apply(null, [m_cdr.apply(null, [m_list])]).apply(null, [function (m__95) {
      return m_car.apply(null, [m_list]);
    }]).apply(null, [function (m__95) {
      return m_last.apply(null, [m_cdr.apply(null, [m_list])]);
    }]).apply(null, [m_nil]);
  };
}]);
exports.m_last = m_last;
var m_append = m_fix.apply(null, [function (m_append) {
  return function (m_list) {
    return function (m_elem) {
      return m_nil_63.apply(null, [m_list]).apply(null, [function (m__95) {
        return m_cons.apply(null, [m_elem]).apply(null, [m_nil]);
      }]).apply(null, [function (m__95) {
        return m_cons.apply(null, [m_car.apply(null, [m_list])]).apply(null, [m_append.apply(null, [m_cdr.apply(null, [m_list])]).apply(null, [m_elem])]);
      }]).apply(null, [m_nil]);
    };
  };
}]);
exports.m_append = m_append;
var m_concat = m_fix.apply(null, [function (m_concat) {
  return function (m_a) {
    return function (m_b) {
      return m_nil_63.apply(null, [m_a]).apply(null, [function (m__95) {
        return m_b;
      }]).apply(null, [function (m__95) {
        return m_cons.apply(null, [m_car.apply(null, [m_a])]).apply(null, [m_concat.apply(null, [m_cdr.apply(null, [m_a])]).apply(null, [m_b])]);
      }]).apply(null, [m_nil]);
    };
  };
}]);
exports.m_concat = m_concat;
var m_get = m_fix.apply(null, [function (m_get) {
  return function (m_list) {
    return function (m_n) {
      return m_nat_46_48_63.apply(null, [m_n]).apply(null, [function (m__95) {
        return m_car.apply(null, [m_list]);
      }]).apply(null, [function (m__95) {
        return m_get.apply(null, [m_cdr.apply(null, [m_list])]).apply(null, [m_nat_46dec.apply(null, [m_n])]);
      }]).apply(null, [m_nil]);
    };
  };
}]);
exports.m_get = m_get;
var m_map = m_fix.apply(null, [function (m_map) {
  return function (m_list) {
    return function (m_f) {
      return m_nil_63.apply(null, [m_list]).apply(null, [function (m__95) {
        return m_nil;
      }]).apply(null, [function (m__95) {
        return m_cons.apply(null, [m_f.apply(null, [m_car.apply(null, [m_list])])]).apply(null, [m_map.apply(null, [m_cdr.apply(null, [m_list])]).apply(null, [m_f])]);
      }]).apply(null, [m_nil]);
    };
  };
}]);
exports.m_map = m_map;

var m_expr_46with_45path = function m_expr_46with_45path(m_path) {
  return function (m_expr) {
    return m_symbol_45expr_63.apply(null, [m_expr]).apply(null, [function (m__95) {
      return m_symbol_45expr.apply(null, [m_symbol_45expr_46name.apply(null, [m_expr])]).apply(null, [m_path]).apply(null, [m_symbol_45expr_46start.apply(null, [m_expr])]).apply(null, [m_symbol_45expr_46end.apply(null, [m_expr])]);
    }]).apply(null, [function (m__95) {
      return m_list_45expr.apply(null, [m_map.apply(null, [m_list_45expr_46exprs.apply(null, [m_expr])]).apply(null, [m_expr_46with_45path.apply(null, [m_path])])]).apply(null, [m_path]).apply(null, [m_list_45expr_46start.apply(null, [m_expr])]).apply(null, [m_list_45expr_46end.apply(null, [m_expr])]);
    }]).apply(null, [m_nil]);
  };
};

exports.m_expr_46with_45path = m_expr_46with_45path;
var m_flat_45map = m_fix.apply(null, [function (m_flat_45map) {
  return function (m_list) {
    return function (m_f) {
      return m_nil_63.apply(null, [m_list]).apply(null, [function (m__95) {
        return m_nil;
      }]).apply(null, [function (m__95) {
        return m_concat.apply(null, [m_f.apply(null, [m_car.apply(null, [m_list])])]).apply(null, [m_flat_45map.apply(null, [m_cdr.apply(null, [m_list])]).apply(null, [m_f])]);
      }]).apply(null, [m_nil]);
    };
  };
}]);
exports.m_flat_45map = m_flat_45map;
var m_filter = m_fix.apply(null, [function (m_filter) {
  return function (m_list) {
    return function (m_f) {
      return m_nil_63.apply(null, [m_list]).apply(null, [function (m__95) {
        return m_nil;
      }]).apply(null, [function (m__95) {
        return m_f.apply(null, [m_car.apply(null, [m_list])]).apply(null, [function (m__95) {
          return m_cons.apply(null, [m_car.apply(null, [m_list])]).apply(null, [m_filter.apply(null, [m_cdr.apply(null, [m_list])]).apply(null, [m_f])]);
        }]).apply(null, [function (m__95) {
          return m_filter.apply(null, [m_cdr.apply(null, [m_list])]).apply(null, [m_f]);
        }]).apply(null, [m_nil]);
      }]).apply(null, [m_nil]);
    };
  };
}]);
exports.m_filter = m_filter;
var m_fold = m_fix.apply(null, [function (m_fold) {
  return function (m_list) {
    return function (m_acc) {
      return function (m_f) {
        return m_nil_63.apply(null, [m_list]).apply(null, [function (m__95) {
          return m_acc;
        }]).apply(null, [function (m__95) {
          return m_fold.apply(null, [m_cdr.apply(null, [m_list])]).apply(null, [m_f.apply(null, [m_acc]).apply(null, [m_car.apply(null, [m_list])])]).apply(null, [m_f]);
        }]).apply(null, [m_nil]);
      };
    };
  };
}]);
exports.m_fold = m_fold;

var m_combine_45tests = function m_combine_45tests(m_tests) {
  return function (m__95) {
    return m_fold.apply(null, [m_tests]).apply(null, [m_success]).apply(null, [function (m_state) {
      return function (m_test) {
        return m_test.apply(null, [m_nil]).apply(null, [m_const.apply(null, [m_state])]).apply(null, [function (m_failure_49) {
          return m_state.apply(null, [function (m__95) {
            return m_failure.apply(null, [m_failure_49]);
          }]).apply(null, [function (m_failure_50) {
            return m_failure.apply(null, [m_concat.apply(null, [m_failure_49]).apply(null, [m_failure_50])]);
          }]);
        }]);
      };
    }]);
  };
};

exports.m_combine_45tests = m_combine_45tests;
var m_reverse_39 = m_fix.apply(null, [function (m_reverse_39) {
  return function (m_list) {
    return function (m_acc) {
      return m_nil_63.apply(null, [m_list]).apply(null, [function (m__95) {
        return m_acc;
      }]).apply(null, [function (m__95) {
        return m_reverse_39.apply(null, [m_cdr.apply(null, [m_list])]).apply(null, [m_cons.apply(null, [m_car.apply(null, [m_list])]).apply(null, [m_acc])]);
      }]).apply(null, [m_nil]);
    };
  };
}]);
exports.m_reverse_39 = m_reverse_39;

var m_reverse = function m_reverse(m_list) {
  return m_reverse_39.apply(null, [m_list]).apply(null, [m_nil]);
};

exports.m_reverse = m_reverse;
var m_nat_46_43 = m_fix.apply(null, [function (m_nat_46_43) {
  return function (m_a) {
    return function (m_b) {
      return m_nat_46_48_63.apply(null, [m_b]).apply(null, [function (m__95) {
        return m_a;
      }]).apply(null, [function (m__95) {
        return m_nat_46_43.apply(null, [m_nat_46inc.apply(null, [m_a])]).apply(null, [m_nat_46dec.apply(null, [m_b])]);
      }]).apply(null, [m_nil]);
    };
  };
}]);
exports.m_nat_46_43 = m_nat_46_43;

var m_next_45char = function m_next_45char(m_p) {
  return m_position.apply(null, [m_position_46line.apply(null, [m_p])]).apply(null, [m_nat_46_43.apply(null, [m_nat_46_49]).apply(null, [m_position_46char.apply(null, [m_p])])]);
};

exports.m_next_45char = m_next_45char;

var m_next_45line = function m_next_45line(m_p) {
  return m_position.apply(null, [m_nat_46_43.apply(null, [m_nat_46_49]).apply(null, [m_position_46line.apply(null, [m_p])])]).apply(null, [m_nat_46_49]);
};

exports.m_next_45line = m_next_45line;
var m_nat_46_45 = m_fix.apply(null, [function (m_nat_46_45) {
  return function (m_a) {
    return function (m_b) {
      return m_nat_46_48_63.apply(null, [m_b]).apply(null, [function (m__95) {
        return m_a;
      }]).apply(null, [function (m__95) {
        return m_nat_46_45.apply(null, [m_nat_46dec.apply(null, [m_a])]).apply(null, [m_nat_46dec.apply(null, [m_b])]);
      }]).apply(null, [m_nil]);
    };
  };
}]);
exports.m_nat_46_45 = m_nat_46_45;
var m_char_45_62nat = m_id;
exports.m_char_45_62nat = m_char_45_62nat;
var m_open_45parentheses = m_car.apply(null, [__to_m_symbol('(')]);
exports.m_open_45parentheses = m_open_45parentheses;
var m_close_45parentheses = m_car.apply(null, [__to_m_symbol(')')]);
exports.m_close_45parentheses = m_close_45parentheses;
var m_semicolon = m_car.apply(null, [__to_m_symbol(';')]);
exports.m_semicolon = m_semicolon;
var m_dot = m_car.apply(null, [__to_m_symbol('.')]);
exports.m_dot = m_dot;
var m_quote = m_car.apply(null, [__to_m_symbol('')]);
exports.m_quote = m_quote;
var m_slash = m_car.apply(null, [__to_m_symbol('/')]);
exports.m_slash = m_slash;
var m_backslash = m_car.apply(null, [__to_m_symbol('\\')]);
exports.m_backslash = m_backslash;
var m_space = m_car.apply(null, [__to_m_symbol(' ')]);
exports.m_space = m_space;
var m_tab = m_car.apply(null, [__to_m_symbol('\t')]);
exports.m_tab = m_tab;
var m_linefeed = m_car.apply(null, [__to_m_symbol('\n')]);
exports.m_linefeed = m_linefeed;
var m_carriage_45return = m_car.apply(null, [__to_m_symbol('\n')]);
exports.m_carriage_45return = m_carriage_45return;

var m_impure = function m_impure(m_x) {
  return function (m_f) {
    return m_f.apply(null, [m_x]);
  };
};

exports.m_impure = m_impure;

var m_then_45run_45with = function m_then_45run_45with(m_p) {
  return function (m_f) {
    return m_p.apply(null, [m_f]);
  };
};

exports.m_then_45run_45with = m_then_45run_45with;

var m_then_45run = function m_then_45run(m_a) {
  return function (m_b) {
    return m_then_45run_45with.apply(null, [m_a]).apply(null, [m_const.apply(null, [m_b])]);
  };
};

exports.m_then_45run = m_then_45run;

var m_run_45with = function m_run_45with(m_p) {
  return function (m_f) {
    return m_then_45run_45with.apply(null, [m_p]).apply(null, [m_compose.apply(null, [m_impure]).apply(null, [m_f])]);
  };
};

exports.m_run_45with = m_run_45with;

var m_do = function m_do(m_env) {
  return function (m_exprs) {
    return m_result_47success.apply(null, [m_nil_63.apply(null, [m_cdr.apply(null, [m_exprs])]).apply(null, [function (m__95) {
      return m_expr_47list.apply(null, [m_exprs]);
    }]).apply(null, [function (m__95) {
      return m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('then-run-with')])]).apply(null, [m_cons.apply(null, [m_cadr.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('fn')])]).apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('do')])]).apply(null, [m_cddr.apply(null, [m_exprs])])])]).apply(null, [m_nil])])])])]).apply(null, [m_nil])])])]);
    }]).apply(null, [m_nil])]);
  };
};

exports.m_do = m_do;

var m_process_47sequence = function m_process_47sequence(m_list) {
  return m_then_45run_45with.apply(null, [m_car.apply(null, [m_list])]).apply(null, [function (m_head) {
    return m_then_45run_45with.apply(null, [m_process_47sequence.apply(null, [m_cdr.apply(null, [m_list])])]).apply(null, [function (m_tail) {
      return m_impure.apply(null, [m_cons.apply(null, [m_head]).apply(null, [m_tail])]);
    }]);
  }]);
};

exports.m_process_47sequence = m_process_47sequence;
var m_symbol_45_62list = m_id;
exports.m_symbol_45_62list = m_symbol_45_62list;

var m_object = function m_object(m_type) {
  return m_pair.apply(null, [m_type]).apply(null, [function (m_name) {
    return m_concat.apply(null, [m_symbol_45_62list.apply(null, [__to_m_symbol('Could not find field ')])]).apply(null, [m_concat.apply(null, [m_symbol_45_62list.apply(null, [m_name])]).apply(null, [m_concat.apply(null, [m_symbol_45_62list.apply(null, [__to_m_symbol(' for ')])]).apply(null, [m_symbol_45_62list.apply(null, [m_type])])])]);
  }]);
};

exports.m_object = m_object;
var m_tree_45map_45node_45nil = m_object.apply(null, [__to_m_symbol('tree-map-node-nil')]);
exports.m_tree_45map_45node_45nil = m_tree_45map_45node_45nil;
var m_symbol_46_43 = m_concat;
exports.m_symbol_46_43 = m_symbol_46_43;

var m_ostream_46write = function m_ostream_46write(m_ostream) {
  return function (m_char) {
    return m_ostream.apply(null, [m_char]);
  };
};

exports.m_ostream_46write = m_ostream_46write;

var m_ostream_46writeln = function m_ostream_46writeln(m_ostream) {
  return function (m_line) {
    return m_nil_63.apply(null, [m_line]).apply(null, [function (m__95) {
      return m_ostream_46write.apply(null, [m_ostream]).apply(null, [m_linefeed]);
    }]).apply(null, [function (m__95) {
      return m_then_45run.apply(null, [m_ostream_46write.apply(null, [m_ostream]).apply(null, [m_car.apply(null, [m_line])])]).apply(null, [m_ostream_46writeln.apply(null, [m_ostream]).apply(null, [m_cdr.apply(null, [m_line])])]);
    }]).apply(null, [m_nil]);
  };
};

exports.m_ostream_46writeln = m_ostream_46writeln;

var m_run_45test = function m_run_45test(m_test) {
  return m_test.apply(null, [m_nil]).apply(null, [function (m_success) {
    return m_ostream_46writeln.apply(null, [m_stdout]).apply(null, [__to_m_symbol('Tests successful')]);
  }]).apply(null, [function (m_failure) {
    return m_fold.apply(null, [m_failure]).apply(null, [m_impure.apply(null, [m_nil])]).apply(null, [function (m_process) {
      return function (m_message) {
        return m_then_45run.apply(null, [m_process]).apply(null, [m_ostream_46writeln.apply(null, [m_stderr]).apply(null, [m_message])]);
      };
    }]);
  }]);
};

exports.m_run_45test = m_run_45test;

var m_macro_45call_45expr = function m_macro_45call_45expr(m_env) {
  return function (m_exprs) {
    return m_nil_63.apply(null, [m_exprs]).apply(null, [function (m__95) {
      return m_result_47error.apply(null, [__to_m_symbol('No exprs passed to macro-call-expr')]);
    }]).apply(null, [function (m__95) {
      return m_result_47success.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('expr/list')])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('cons')])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('expr/symbol')])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('symbol')])]).apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_nil])])])]).apply(null, [m_nil])])])]).apply(null, [m_cons.apply(null, [m_cadr.apply(null, [m_exprs])]).apply(null, [m_nil])])])])]).apply(null, [m_nil])])])]);
    }]).apply(null, [m_nil]);
  };
};

exports.m_macro_45call_45expr = m_macro_45call_45expr;

var m_cond = function m_cond(m_env) {
  return function (m_exprs) {
    return m_nil_63.apply(null, [m_exprs]).apply(null, [function (m__95) {
      return m_result_47error.apply(null, [__to_m_symbol('No exprs passed to cond')]);
    }]).apply(null, [function (m__95) {
      return m_nil_63.apply(null, [m_cdr.apply(null, [m_exprs])]).apply(null, [function (m__95) {
        return m_result_47success.apply(null, [m_car.apply(null, [m_exprs])]);
      }]).apply(null, [function (m__95) {
        return m_nil_63.apply(null, [m_cddr.apply(null, [m_exprs])]).apply(null, [function (m__95) {
          return m_result_47error.apply(null, [__to_m_symbol('No else case for cond')]);
        }]).apply(null, [function (m__95) {
          return m_result_47success.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('if')])]).apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_cadr.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('cond')])]).apply(null, [m_cddr.apply(null, [m_exprs])])])]).apply(null, [m_nil])])])])])]);
        }]).apply(null, [m_nil]);
      }]).apply(null, [m_nil]);
    }]).apply(null, [m_nil]);
  };
};

exports.m_cond = m_cond;
var m_list_46_61 = m_fix.apply(null, [function (m_list_46_61) {
  return function (m__61) {
    return function (m_a) {
      return function (m_b) {
        return m_nil_63.apply(null, [m_a]).apply(null, [function (m__95) {
          return m_nil_63.apply(null, [m_b]);
        }]).apply(null, [function (m__95) {
          return m_nil_63.apply(null, [m_b]).apply(null, [function (m__95) {
            return m_false;
          }]).apply(null, [function (m__95) {
            return m_and.apply(null, [m__61.apply(null, [m_car.apply(null, [m_a])]).apply(null, [m_car.apply(null, [m_b])])]).apply(null, [function (m__95) {
              return m_list_46_61.apply(null, [m__61]).apply(null, [m_cdr.apply(null, [m_a])]).apply(null, [m_cdr.apply(null, [m_b])]);
            }]);
          }]).apply(null, [m_nil]);
        }]).apply(null, [m_nil]);
      };
    };
  };
}]);
exports.m_list_46_61 = m_list_46_61;
var m_nat_46_60 = m_fix.apply(null, [function (m_nat_46_60) {
  return function (m_a) {
    return function (m_b) {
      return m_nat_46_48_63.apply(null, [m_a]).apply(null, [function (m__95) {
        return m_not.apply(null, [m_nat_46_48_63.apply(null, [m_b])]);
      }]).apply(null, [function (m__95) {
        return m_nat_46_48_63.apply(null, [m_b]).apply(null, [function (m__95) {
          return m_false;
        }]).apply(null, [function (m__95) {
          return m_nat_46_60.apply(null, [m_nat_46dec.apply(null, [m_a])]).apply(null, [m_nat_46dec.apply(null, [m_b])]);
        }]).apply(null, [m_nil]);
      }]).apply(null, [m_nil]);
    };
  };
}]);
exports.m_nat_46_60 = m_nat_46_60;
var m_nat_46_62 = m_swap.apply(null, [m_nat_46_60]);
exports.m_nat_46_62 = m_nat_46_62;
var m_nat_46_61 = m_fix.apply(null, [function (m_nat_46_61) {
  return function (m_a) {
    return function (m_b) {
      return m_nat_46_48_63.apply(null, [m_a]).apply(null, [function (m__95) {
        return m_nat_46_48_63.apply(null, [m_b]);
      }]).apply(null, [function (m__95) {
        return m_nat_46_48_63.apply(null, [m_b]).apply(null, [function (m__95) {
          return m_false;
        }]).apply(null, [function (m__95) {
          return m_nat_46_61.apply(null, [m_nat_46dec.apply(null, [m_a])]).apply(null, [m_nat_46dec.apply(null, [m_b])]);
        }]).apply(null, [m_nil]);
      }]).apply(null, [m_nil]);
    };
  };
}]);
exports.m_nat_46_61 = m_nat_46_61;
var m_char_46_61 = m_nat_46_61;
exports.m_char_46_61 = m_char_46_61;

var m_newline_63 = function m_newline_63(m_char) {
  return m_or.apply(null, [m_char_46_61.apply(null, [m_char]).apply(null, [m_linefeed])]).apply(null, [function (m__95) {
    return m_char_46_61.apply(null, [m_char]).apply(null, [m_carriage_45return]);
  }]);
};

exports.m_newline_63 = m_newline_63;
var m_parse_45comment = m_fix.apply(null, [function (m_parse_45comment) {
  return function (m_path) {
    return function (m_input) {
      return function (m_position) {
        return function (m_continue) {
          return m_or.apply(null, [m_nil_63.apply(null, [m_input])]).apply(null, [function (m__95) {
            return m_newline_63.apply(null, [m_car.apply(null, [m_input])]);
          }]).apply(null, [function (m__95) {
            return m_continue.apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position]);
          }]).apply(null, [function (m__95) {
            return m_parse_45comment.apply(null, [m_path]).apply(null, [m_cdr.apply(null, [m_input])]).apply(null, [m_next_45char.apply(null, [m_position])]).apply(null, [m_continue]);
          }]).apply(null, [m_nil]);
        };
      };
    };
  };
}]);
exports.m_parse_45comment = m_parse_45comment;

var m_whitespace_63 = function m_whitespace_63(m_char) {
  return m_or.apply(null, [m_char_46_61.apply(null, [m_char]).apply(null, [m_space])]).apply(null, [function (m__95) {
    return m_or.apply(null, [m_char_46_61.apply(null, [m_char]).apply(null, [m_tab])]).apply(null, [function (m__95) {
      return m_newline_63.apply(null, [m_char]);
    }]);
  }]);
};

exports.m_whitespace_63 = m_whitespace_63;

var m_separator_63 = function m_separator_63(m_char) {
  return m_or.apply(null, [m_whitespace_63.apply(null, [m_char])]).apply(null, [function (m__95) {
    return m_or.apply(null, [m_char_46_61.apply(null, [m_char]).apply(null, [m_open_45parentheses])]).apply(null, [function (m__95) {
      return m_or.apply(null, [m_char_46_61.apply(null, [m_char]).apply(null, [m_close_45parentheses])]).apply(null, [function (m__95) {
        return m_or.apply(null, [m_char_46_61.apply(null, [m_char]).apply(null, [m_semicolon])]).apply(null, [function (m__95) {
          return m_char_46_61.apply(null, [m_char]).apply(null, [m_quote]);
        }]);
      }]);
    }]);
  }]);
};

exports.m_separator_63 = m_separator_63;
var m_desugar_45quote_39 = m_fix.apply(null, [function (m_desugar_45quote_39) {
  return function (m_name) {
    return m_nil_63.apply(null, [m_name]).apply(null, [function (m__95) {
      return m_name;
    }]).apply(null, [function (m__95) {
      return m_char_46_61.apply(null, [m_quote]).apply(null, [m_car.apply(null, [m_name])]).apply(null, [function (m__95) {
        return m_cons.apply(null, [m_quote]).apply(null, [m_cons.apply(null, [m_quote]).apply(null, [m_desugar_45quote_39.apply(null, [m_cdr.apply(null, [m_name])])])]);
      }]).apply(null, [function (m__95) {
        return m_cons.apply(null, [m_car.apply(null, [m_name])]).apply(null, [m_desugar_45quote_39.apply(null, [m_cdr.apply(null, [m_name])])]);
      }]).apply(null, [m_nil]);
    }]).apply(null, [m_nil]);
  };
}]);
exports.m_desugar_45quote_39 = m_desugar_45quote_39;
var m_symbol_46_61 = m_list_46_61.apply(null, [m_char_46_61]);
exports.m_symbol_46_61 = m_symbol_46_61;

var m_is_63 = function m_is_63(m_type) {
  return function (m_data) {
    return m_symbol_46_61.apply(null, [m_type]).apply(null, [m_type_45name.apply(null, [m_data])]);
  };
};

exports.m_is_63 = m_is_63;
var m_generating_63 = m_is_63.apply(null, [__to_m_symbol('generating')]);
exports.m_generating_63 = m_generating_63;
var m_generated_63 = m_is_63.apply(null, [__to_m_symbol('generated')]);
exports.m_generated_63 = m_generated_63;
var m_degenerate_63 = m_is_63.apply(null, [__to_m_symbol('degenerate')]);
exports.m_degenerate_63 = m_degenerate_63;
var m_def_45declaration_63 = m_is_63.apply(null, [__to_m_symbol('def-declaration')]);
exports.m_def_45declaration_63 = m_def_45declaration_63;
var m_fn_45declaration_63 = m_is_63.apply(null, [__to_m_symbol('fn-declaration')]);
exports.m_fn_45declaration_63 = m_fn_45declaration_63;
var m_local_45variable_63 = m_is_63.apply(null, [__to_m_symbol('local-variable')]);
exports.m_local_45variable_63 = m_local_45variable_63;
var m_global_45variable_63 = m_is_63.apply(null, [__to_m_symbol('global-variable')]);
exports.m_global_45variable_63 = m_global_45variable_63;
var m_tree_45map_45node_45nil_63 = m_is_63.apply(null, [__to_m_symbol('tree-map-node-nil')]);
exports.m_tree_45map_45node_45nil_63 = m_tree_45map_45node_45nil_63;

var m_derive = function m_derive(m_data) {
  return function (m_name) {
    return function (m_value) {
      return m_pair.apply(null, [m_first.apply(null, [m_data])]).apply(null, [function (m_field) {
        return m_symbol_46_61.apply(null, [m_field]).apply(null, [m_name]).apply(null, [function (m__95) {
          return m_value;
        }]).apply(null, [function (m__95) {
          return m_second.apply(null, [m_data]).apply(null, [m_field]);
        }]).apply(null, [m_nil]);
      }]);
    };
  };
};

exports.m_derive = m_derive;

var m_data = function m_data(m_type) {
  return function (m_fields) {
    return m_fold.apply(null, [m_fields]).apply(null, [m_object.apply(null, [m_type])]).apply(null, [function (m_data) {
      return function (m_field) {
        return m_derive.apply(null, [m_data]).apply(null, [m_first.apply(null, [m_field])]).apply(null, [m_second.apply(null, [m_field])]);
      };
    }]);
  };
};

exports.m_data = m_data;
var m_new_45data_39 = m_fix.apply(null, [function (m_new_45data_39) {
  return function (m_type) {
    return function (m_names) {
      return function (m_fields) {
        return m_nil_63.apply(null, [m_names]).apply(null, [function (m__95) {
          return m_data.apply(null, [m_type]).apply(null, [m_fields]);
        }]).apply(null, [function (m__95) {
          return function (m_value) {
            return m_new_45data_39.apply(null, [m_type]).apply(null, [m_cdr.apply(null, [m_names])]).apply(null, [m_cons.apply(null, [m_pair.apply(null, [m_car.apply(null, [m_names])]).apply(null, [m_value])]).apply(null, [m_fields])]);
          };
        }]).apply(null, [m_nil]);
      };
    };
  };
}]);
exports.m_new_45data_39 = m_new_45data_39;

var m_new_45data = function m_new_45data(m_type) {
  return function (m_names) {
    return m_new_45data_39.apply(null, [m_type]).apply(null, [m_names]).apply(null, [m_nil]);
  };
};

exports.m_new_45data = m_new_45data;
var m_generating = m_new_45data.apply(null, [__to_m_symbol('generating')]).apply(null, [m_cons.apply(null, [__to_m_symbol('dependencies')]).apply(null, [m_cons.apply(null, [__to_m_symbol('global-env')]).apply(null, [m_cons.apply(null, [__to_m_symbol('continue')]).apply(null, [m_nil])])])]);
exports.m_generating = m_generating;
var m_generated = m_new_45data.apply(null, [__to_m_symbol('generated')]).apply(null, [m_cons.apply(null, [__to_m_symbol('operation')]).apply(null, [m_cons.apply(null, [__to_m_symbol('declarations')]).apply(null, [m_cons.apply(null, [__to_m_symbol('global-env')]).apply(null, [m_nil])])])]);
exports.m_generated = m_generated;
var m_degenerate = m_new_45data.apply(null, [__to_m_symbol('degenerate')]).apply(null, [m_cons.apply(null, [__to_m_symbol('errors')]).apply(null, [m_cons.apply(null, [__to_m_symbol('global-env')]).apply(null, [m_nil])])]);
exports.m_degenerate = m_degenerate;
var m_def_45declaration = m_new_45data.apply(null, [__to_m_symbol('def-declaration')]).apply(null, [m_cons.apply(null, [__to_m_symbol('name')]).apply(null, [m_cons.apply(null, [__to_m_symbol('path')]).apply(null, [m_cons.apply(null, [__to_m_symbol('value')]).apply(null, [m_nil])])])]);
exports.m_def_45declaration = m_def_45declaration;
var m_fn_45declaration = m_new_45data.apply(null, [__to_m_symbol('fn-declaration')]).apply(null, [m_cons.apply(null, [__to_m_symbol('name')]).apply(null, [m_cons.apply(null, [__to_m_symbol('path')]).apply(null, [m_cons.apply(null, [__to_m_symbol('closures')]).apply(null, [m_cons.apply(null, [__to_m_symbol('value')]).apply(null, [m_nil])])])])]);
exports.m_fn_45declaration = m_fn_45declaration;
var m_local_45env = m_new_45data.apply(null, [__to_m_symbol('local-env')]).apply(null, [m_cons.apply(null, [__to_m_symbol('locals')]).apply(null, [m_cons.apply(null, [__to_m_symbol('def')]).apply(null, [m_nil])])]);
exports.m_local_45env = m_local_45env;
var m_global_45env = m_new_45data.apply(null, [__to_m_symbol('global-env')]).apply(null, [m_cons.apply(null, [__to_m_symbol('globals')]).apply(null, [m_cons.apply(null, [__to_m_symbol('heap')]).apply(null, [m_cons.apply(null, [__to_m_symbol('dependents')]).apply(null, [m_cons.apply(null, [__to_m_symbol('index')]).apply(null, [m_nil])])])])]);
exports.m_global_45env = m_global_45env;
var m_local_45variable_45operation = m_new_45data.apply(null, [__to_m_symbol('local-variable-operation')]).apply(null, [m_cons.apply(null, [__to_m_symbol('name')]).apply(null, [m_cons.apply(null, [__to_m_symbol('index')]).apply(null, [m_nil])])]);
exports.m_local_45variable_45operation = m_local_45variable_45operation;
var m_global_45variable_45operation = m_new_45data.apply(null, [__to_m_symbol('global-variable-operation')]).apply(null, [m_cons.apply(null, [__to_m_symbol('name')]).apply(null, [m_cons.apply(null, [__to_m_symbol('path')]).apply(null, [m_nil])])]);
exports.m_global_45variable_45operation = m_global_45variable_45operation;
var m_if_45operation = m_new_45data.apply(null, [__to_m_symbol('if-operation')]).apply(null, [m_cons.apply(null, [__to_m_symbol('cond')]).apply(null, [m_cons.apply(null, [__to_m_symbol('true')]).apply(null, [m_cons.apply(null, [__to_m_symbol('false')]).apply(null, [m_nil])])])]);
exports.m_if_45operation = m_if_45operation;
var m_def_45operation = m_new_45data.apply(null, [__to_m_symbol('def-operation')]).apply(null, [m_cons.apply(null, [__to_m_symbol('name')]).apply(null, [m_cons.apply(null, [__to_m_symbol('path')]).apply(null, [m_cons.apply(null, [__to_m_symbol('value')]).apply(null, [m_nil])])])]);
exports.m_def_45operation = m_def_45operation;
var m_fn_45operation = m_new_45data.apply(null, [__to_m_symbol('fn-operation')]).apply(null, [m_cons.apply(null, [__to_m_symbol('path')]).apply(null, [m_cons.apply(null, [__to_m_symbol('name')]).apply(null, [m_cons.apply(null, [__to_m_symbol('arg')]).apply(null, [m_cons.apply(null, [__to_m_symbol('value')]).apply(null, [m_cons.apply(null, [__to_m_symbol('closures')]).apply(null, [m_nil])])])])])]);
exports.m_fn_45operation = m_fn_45operation;
var m_symbol_45operation = m_new_45data.apply(null, [__to_m_symbol('symbol-operation')]).apply(null, [m_cons.apply(null, [__to_m_symbol('name')]).apply(null, [m_nil])]);
exports.m_symbol_45operation = m_symbol_45operation;
var m_nil_45operation = m_symbol_45operation.apply(null, [m_nil]);
exports.m_nil_45operation = m_nil_45operation;

var m_generate_45symbol_45literal_45expr = function m_generate_45symbol_45literal_45expr(m_name) {
  return function (m_local_45env) {
    return function (m_global_45env) {
      return m_generated.apply(null, [m_symbol_45operation.apply(null, [m_name])]).apply(null, [m_nil]).apply(null, [m_global_45env]);
    };
  };
};

exports.m_generate_45symbol_45literal_45expr = m_generate_45symbol_45literal_45expr;
var m_apply_45operation = m_new_45data.apply(null, [__to_m_symbol('apply-operation')]).apply(null, [m_cons.apply(null, [__to_m_symbol('fn')]).apply(null, [m_cons.apply(null, [__to_m_symbol('arg')]).apply(null, [m_nil])])]);
exports.m_apply_45operation = m_apply_45operation;
var m_line_45number_45operation = m_new_45data.apply(null, [__to_m_symbol('line-number-operation')]).apply(null, [m_cons.apply(null, [__to_m_symbol('operation')]).apply(null, [m_cons.apply(null, [__to_m_symbol('line')]).apply(null, [m_nil])])]);
exports.m_line_45number_45operation = m_line_45number_45operation;
var m_local_45variable = m_new_45data.apply(null, [__to_m_symbol('local-variable')]).apply(null, [m_cons.apply(null, [__to_m_symbol('name')]).apply(null, [m_cons.apply(null, [__to_m_symbol('index')]).apply(null, [m_nil])])]);
exports.m_local_45variable = m_local_45variable;
var m_global_45variable = m_new_45data.apply(null, [__to_m_symbol('global-variable')]).apply(null, [m_cons.apply(null, [__to_m_symbol('name')]).apply(null, [m_cons.apply(null, [__to_m_symbol('path')]).apply(null, [m_cons.apply(null, [__to_m_symbol('macro?')]).apply(null, [m_nil])])])]);
exports.m_global_45variable = m_global_45variable;
var m_tree_45map_45node = m_new_45data.apply(null, [__to_m_symbol('tree-map-node')]).apply(null, [m_cons.apply(null, [__to_m_symbol('left')]).apply(null, [m_cons.apply(null, [__to_m_symbol('right')]).apply(null, [m_cons.apply(null, [__to_m_symbol('key')]).apply(null, [m_cons.apply(null, [__to_m_symbol('value')]).apply(null, [m_nil])])])])]);
exports.m_tree_45map_45node = m_tree_45map_45node;
var m_tree_45map = m_new_45data.apply(null, [__to_m_symbol('tree-map')]).apply(null, [m_cons.apply(null, [__to_m_symbol('node')]).apply(null, [m_cons.apply(null, [__to_m_symbol('compare')]).apply(null, [m_nil])])]);
exports.m_tree_45map = m_tree_45map;

var m_empty_45tree_45map = function m_empty_45tree_45map(m_compare) {
  return m_tree_45map.apply(null, [m_tree_45map_45node_45nil]).apply(null, [m_compare]);
};

exports.m_empty_45tree_45map = m_empty_45tree_45map;

var m_let = function m_let(m_env) {
  return function (m_exprs) {
    return m_result_47success.apply(null, [m_nil_63.apply(null, [m_cdr.apply(null, [m_exprs])]).apply(null, [function (m__95) {
      return m_expr_47list.apply(null, [m_exprs]);
    }]).apply(null, [function (m__95) {
      return m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('with')])]).apply(null, [m_cons.apply(null, [m_cadr.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('fn')])]).apply(null, [m_cons.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('let')])]).apply(null, [m_cddr.apply(null, [m_exprs])])])]).apply(null, [m_nil])])])])]).apply(null, [m_nil])])])]);
    }]).apply(null, [m_nil])]);
  };
};

exports.m_let = m_let;
var m_parse_45symbol = m_fix.apply(null, [function (m_parse_45symbol) {
  return function (m_path) {
    return function (m_input) {
      return function (m_position) {
        return function (m_continue) {
          return m_with.apply(null, [m_car.apply(null, [m_input])]).apply(null, [function (m_head) {
            return m_or.apply(null, [m_nil_63.apply(null, [m_input])]).apply(null, [function (m__95) {
              return m_separator_63.apply(null, [m_head]);
            }]).apply(null, [function (m__95) {
              return m_continue.apply(null, [m_nil]).apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position]);
            }]).apply(null, [function (m__95) {
              return m_parse_45symbol.apply(null, [m_path]).apply(null, [m_cdr.apply(null, [m_input])]).apply(null, [m_next_45char.apply(null, [m_position])]).apply(null, [function (m_chars) {
                return function (m_path) {
                  return function (m_input) {
                    return function (m_position) {
                      return m_continue.apply(null, [m_cons.apply(null, [m_head]).apply(null, [m_chars])]).apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position]);
                    };
                  };
                };
              }]);
            }]).apply(null, [m_nil]);
          }]);
        };
      };
    };
  };
}]);
exports.m_parse_45symbol = m_parse_45symbol;

var m_pcond = function m_pcond(m_env) {
  return function (m_exprs) {
    return m_nil_63.apply(null, [m_exprs]).apply(null, [function (m__95) {
      return m_result_47error.apply(null, [__to_m_symbol('No exprs passed to pcond')]);
    }]).apply(null, [function (m__95) {
      return m_with.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [function (m_predicate) {
        return m_with.apply(null, [m_cdr.apply(null, [m_exprs])]).apply(null, [function (m_vals) {
          return m_nil_63.apply(null, [m_vals]).apply(null, [function (m__95) {
            return m_result_47error.apply(null, [__to_m_symbol('No values after predicate for pcond')]);
          }]).apply(null, [function (m__95) {
            return m_nil_63.apply(null, [m_cdr.apply(null, [m_vals])]).apply(null, [function (m__95) {
              return m_result_47success.apply(null, [m_car.apply(null, [m_vals])]);
            }]).apply(null, [function (m__95) {
              return m_result_47success.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('if')])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_predicate]).apply(null, [m_cons.apply(null, [m_car.apply(null, [m_vals])]).apply(null, [m_nil])])])]).apply(null, [m_cons.apply(null, [m_cadr.apply(null, [m_vals])]).apply(null, [m_cons.apply(null, [m_expr_47list.apply(null, [m_cons.apply(null, [m_expr_47symbol.apply(null, [__to_m_symbol('pcond')])]).apply(null, [m_cons.apply(null, [m_predicate]).apply(null, [m_cddr.apply(null, [m_vals])])])])]).apply(null, [m_nil])])])])])]);
            }]).apply(null, [m_nil]);
          }]).apply(null, [m_nil]);
        }]);
      }]);
    }]).apply(null, [m_nil]);
  };
};

exports.m_pcond = m_pcond;
var m_desugar_45should_45quote_63 = m_fix.apply(null, [function (m_desugar_45should_45quote_63) {
  return function (m_name) {
    return m_nil_63.apply(null, [m_name]).apply(null, [function (m__95) {
      return m_false;
    }]).apply(null, [function (m__95) {
      return m_with.apply(null, [m_car.apply(null, [m_name])]).apply(null, [function (m_char) {
        return m_or.apply(null, [m_char_46_61.apply(null, [m_char]).apply(null, [m_quote])]).apply(null, [function (m__95) {
          return m_or.apply(null, [m_char_46_61.apply(null, [m_char]).apply(null, [m_open_45parentheses])]).apply(null, [function (m__95) {
            return m_or.apply(null, [m_char_46_61.apply(null, [m_char]).apply(null, [m_close_45parentheses])]).apply(null, [function (m__95) {
              return m_or.apply(null, [m_char_46_61.apply(null, [m_char]).apply(null, [m_semicolon])]).apply(null, [function (m__95) {
                return m_or.apply(null, [m_whitespace_63.apply(null, [m_char])]).apply(null, [function (m__95) {
                  return m_desugar_45should_45quote_63.apply(null, [m_cdr.apply(null, [m_name])]);
                }]);
              }]);
            }]);
          }]);
        }]);
      }]);
    }]).apply(null, [m_nil]);
  };
}]);
exports.m_desugar_45should_45quote_63 = m_desugar_45should_45quote_63;

var m_desugar_45quote = function m_desugar_45quote(m_name) {
  return m_or.apply(null, [m_desugar_45should_45quote_63.apply(null, [m_name])]).apply(null, [function (m__95) {
    return m_nil_63.apply(null, [m_name]);
  }]).apply(null, [function (m__95) {
    return m_cons.apply(null, [m_quote]).apply(null, [m_swap.apply(null, [m_append]).apply(null, [m_quote]).apply(null, [m_desugar_45quote_39.apply(null, [m_name])])]);
  }]).apply(null, [function (m__95) {
    return m_name;
  }]).apply(null, [m_nil]);
};

exports.m_desugar_45quote = m_desugar_45quote;
var m_parse_45unused = m_fix.apply(null, [function (m_parse_45unused) {
  return function (m_path) {
    return function (m_input) {
      return function (m_position) {
        return function (m_continue) {
          return m_nil_63.apply(null, [m_input]).apply(null, [function (m__95) {
            return m_continue.apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position]);
          }]).apply(null, [function (m__95) {
            return m_with.apply(null, [m_car.apply(null, [m_input])]).apply(null, [function (m_head) {
              return m_char_46_61.apply(null, [m_head]).apply(null, [m_linefeed]).apply(null, [function (m__95) {
                return m_parse_45unused.apply(null, [m_path]).apply(null, [m_cdr.apply(null, [m_input])]).apply(null, [m_next_45line.apply(null, [m_position])]).apply(null, [m_continue]);
              }]).apply(null, [function (m__95) {
                return m_whitespace_63.apply(null, [m_head]).apply(null, [function (m__95) {
                  return m_parse_45unused.apply(null, [m_path]).apply(null, [m_cdr.apply(null, [m_input])]).apply(null, [m_next_45char.apply(null, [m_position])]).apply(null, [m_continue]);
                }]).apply(null, [function (m__95) {
                  return m_char_46_61.apply(null, [m_head]).apply(null, [m_semicolon]).apply(null, [function (m__95) {
                    return m_parse_45comment.apply(null, [m_path]).apply(null, [m_cdr.apply(null, [m_input])]).apply(null, [m_next_45char.apply(null, [m_position])]).apply(null, [function (m_path) {
                      return function (m_input) {
                        return function (m_position) {
                          return m_parse_45unused.apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position]).apply(null, [m_continue]);
                        };
                      };
                    }]);
                  }]).apply(null, [function (m__95) {
                    return m_continue.apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position]);
                  }]).apply(null, [m_nil]);
                }]).apply(null, [m_nil]);
              }]).apply(null, [m_nil]);
            }]);
          }]).apply(null, [m_nil]);
        };
      };
    };
  };
}]);
exports.m_parse_45unused = m_parse_45unused;
var m_istream_46read = m_id;
exports.m_istream_46read = m_istream_46read;

var m_istream_46readln = function m_istream_46readln(m_istream) {
  return m_then_45run_45with.apply(null, [m_istream]).apply(null, [function (m_char) {
    return m_char_46_61.apply(null, [m_linefeed]).apply(null, [m_char]).apply(null, [function (m__95) {
      return m_impure.apply(null, [m_nil]);
    }]).apply(null, [function (m__95) {
      return m_then_45run_45with.apply(null, [m_istream_46readln.apply(null, [m_istream])]).apply(null, [function (m_line) {
        return m_impure.apply(null, [m_newline_63.apply(null, [m_char]).apply(null, [function (m__95) {
          return m_line;
        }]).apply(null, [function (m__95) {
          return m_cons.apply(null, [m_char]).apply(null, [m_line]);
        }]).apply(null, [m_nil])]);
      }]);
    }]).apply(null, [m_nil]);
  }]);
};

exports.m_istream_46readln = m_istream_46readln;
var m_compare_61 = m_object.apply(null, [__to_m_symbol('compare=')]);
exports.m_compare_61 = m_compare_61;
var m_compare_60 = m_object.apply(null, [__to_m_symbol('compare<')]);
exports.m_compare_60 = m_compare_60;
var m_compare_62 = m_object.apply(null, [__to_m_symbol('compare>')]);
exports.m_compare_62 = m_compare_62;

var m_compare_45nat = function m_compare_45nat(m_a) {
  return function (m_b) {
    return m_nat_46_62.apply(null, [m_a]).apply(null, [m_b]).apply(null, [function (m__95) {
      return m_compare_62;
    }]).apply(null, [function (m__95) {
      return m_nat_46_60.apply(null, [m_a]).apply(null, [m_b]).apply(null, [function (m__95) {
        return m_compare_60;
      }]).apply(null, [function (m__95) {
        return m_compare_61;
      }]).apply(null, [m_nil]);
    }]).apply(null, [m_nil]);
  };
};

exports.m_compare_45nat = m_compare_45nat;

var m_compare_45char = function m_compare_45char(m_a) {
  return function (m_b) {
    return m_compare_45nat.apply(null, [m_char_45_62nat.apply(null, [m_a])]).apply(null, [m_char_45_62nat.apply(null, [m_b])]);
  };
};

exports.m_compare_45char = m_compare_45char;
var m_compare_61_63 = m_is_63.apply(null, [__to_m_symbol('compare=')]);
exports.m_compare_61_63 = m_compare_61_63;
var m_compare_45list = m_fix.apply(null, [function (m_compare_45list) {
  return function (m_compare) {
    return function (m_a) {
      return function (m_b) {
        return m_and.apply(null, [m_nil_63.apply(null, [m_a])]).apply(null, [function (m__95) {
          return m_nil_63.apply(null, [m_b]);
        }]).apply(null, [function (m__95) {
          return m_compare_61;
        }]).apply(null, [function (m__95) {
          return m_nil_63.apply(null, [m_a]).apply(null, [function (m__95) {
            return m_compare_60;
          }]).apply(null, [function (m__95) {
            return m_nil_63.apply(null, [m_b]).apply(null, [function (m__95) {
              return m_compare_62;
            }]).apply(null, [function (m__95) {
              return m_with.apply(null, [m_compare.apply(null, [m_car.apply(null, [m_a])]).apply(null, [m_car.apply(null, [m_b])])]).apply(null, [function (m_compare_45result) {
                return m_compare_61_63.apply(null, [m_compare_45result]).apply(null, [function (m__95) {
                  return m_compare_45list.apply(null, [m_compare]).apply(null, [m_cdr.apply(null, [m_a])]).apply(null, [m_cdr.apply(null, [m_b])]);
                }]).apply(null, [function (m__95) {
                  return m_compare_45result;
                }]).apply(null, [m_nil]);
              }]);
            }]).apply(null, [m_nil]);
          }]).apply(null, [m_nil]);
        }]).apply(null, [m_nil]);
      };
    };
  };
}]);
exports.m_compare_45list = m_compare_45list;

var m_compare_45symbol = function m_compare_45symbol(m_a) {
  return function (m_b) {
    return m_compare_45list.apply(null, [m_compare_45char]).apply(null, [m_a]).apply(null, [m_b]);
  };
};

exports.m_compare_45symbol = m_compare_45symbol;
var m_default_45local_45env = m_local_45env.apply(null, [m_empty_45tree_45map.apply(null, [m_compare_45symbol])]).apply(null, [m_nil]);
exports.m_default_45local_45env = m_default_45local_45env;
var m_default_45global_45env = m_global_45env.apply(null, [m_empty_45tree_45map.apply(null, [m_compare_45symbol])]).apply(null, [m_empty_45heap]).apply(null, [m_empty_45tree_45map.apply(null, [m_compare_45symbol])]).apply(null, [m_nat_46_48]);
exports.m_default_45global_45env = m_default_45global_45env;
var m_compare_60_63 = m_is_63.apply(null, [__to_m_symbol('compare<')]);
exports.m_compare_60_63 = m_compare_60_63;
var m_compare_62_63 = m_is_63.apply(null, [__to_m_symbol('compare>')]);
exports.m_compare_62_63 = m_compare_62_63;

var m_fold_45compare = function m_fold_45compare(m_compare) {
  return function (m__60) {
    return function (m__62) {
      return function (m__61) {
        return m_compare_60_63.apply(null, [m_compare]).apply(null, [function (m__95) {
          return m__60.apply(null, [m_compare]);
        }]).apply(null, [function (m__95) {
          return m_compare_62_63.apply(null, [m_compare]).apply(null, [function (m__95) {
            return m__62.apply(null, [m_compare]);
          }]).apply(null, [function (m__95) {
            return m__61.apply(null, [m_compare]);
          }]).apply(null, [m_nil]);
        }]).apply(null, [m_nil]);
      };
    };
  };
};

exports.m_fold_45compare = m_fold_45compare;
var m_file_46local_45file = m_file_46from_45path.apply(null, [__to_m_symbol('.')]);
exports.m_file_46local_45file = m_file_46local_45file;

var m_ref_45root = function m_ref_45root(m_root) {
  return m_file_46child.apply(null, [m_root]).apply(null, [__to_m_symbol('ref')]);
};

exports.m_ref_45root = m_ref_45root;
var m_mpm_45ref_45root = m_ref_45root.apply(null, [m_mpm_45root]);
exports.m_mpm_45ref_45root = m_mpm_45ref_45root;

var m_src_45root = function m_src_45root(m_root) {
  return m_file_46child.apply(null, [m_root]).apply(null, [__to_m_symbol('src')]);
};

exports.m_src_45root = m_src_45root;
var m_mpm_45src_45root = m_src_45root.apply(null, [m_mpm_45root]);
exports.m_mpm_45src_45root = m_mpm_45src_45root;

var m_get_45ref = function m_get_45ref(m_ref_45root) {
  return function (m_name) {
    return m_file_46child.apply(null, [m_ref_45root]).apply(null, [m_normalize.apply(null, [m_name])]);
  };
};

exports.m_get_45ref = m_get_45ref;
var m_mpm_45get_45ref = m_get_45ref.apply(null, [m_mpm_45ref_45root]);
exports.m_mpm_45get_45ref = m_mpm_45get_45ref;

var m_get_45src = function m_get_45src(m_src_45root) {
  return function (m_ref) {
    return m_file_46child.apply(null, [m_src_45root]).apply(null, [m_concat.apply(null, [m_ref]).apply(null, [__to_m_symbol('.m')])]);
  };
};

exports.m_get_45src = m_get_45src;
var m_mpm_45get_45src = m_get_45src.apply(null, [m_mpm_45src_45root]);
exports.m_mpm_45get_45src = m_mpm_45get_45src;

var m_put_45srcs = function m_put_45srcs(m_in) {
  return function (m_src_45root) {
    return m_file_46copy.apply(null, [m_in]).apply(null, [m_src_45root]);
  };
};

exports.m_put_45srcs = m_put_45srcs;

var m_mpm_45put_45srcs = function m_mpm_45put_45srcs(m_in) {
  return m_put_45srcs.apply(null, [m_in]).apply(null, [m_mpm_45src_45root]);
};

exports.m_mpm_45put_45srcs = m_mpm_45put_45srcs;
var m_error = m_fix.apply(null, [function (m_error) {
  return function (m_message) {
    return function (m__95) {
      return m_error.apply(null, [m_message]);
    };
  };
}]);
exports.m_error = m_error;
var m_parse_45symbol_45literal = m_fix.apply(null, [function (m_parse_45symbol_45literal) {
  return function (m_path) {
    return function (m_input) {
      return function (m_position) {
        return function (m_continue) {
          return m_nil_63.apply(null, [m_input]).apply(null, [function (m__95) {
            return m_error.apply(null, [__to_m_symbol('Unexpected end of file')]);
          }]).apply(null, [function (m__95) {
            return m_with.apply(null, [m_car.apply(null, [m_input])]).apply(null, [function (m_head) {
              return m_char_46_61.apply(null, [m_head]).apply(null, [m_quote]).apply(null, [function (m__95) {
                return m_char_46_61.apply(null, [m_cadr.apply(null, [m_input])]).apply(null, [m_quote]).apply(null, [function (m__95) {
                  return m_parse_45symbol_45literal.apply(null, [m_path]).apply(null, [m_cdr.apply(null, [m_input])]).apply(null, [m_next_45char.apply(null, [m_next_45char.apply(null, [m_position])])]).apply(null, [function (m_chars) {
                    return function (m_path) {
                      return function (m_input) {
                        return function (m_position) {
                          return m_continue.apply(null, [m_cons.apply(null, [m_quote]).apply(null, [m_chars])]).apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position]);
                        };
                      };
                    };
                  }]);
                }]).apply(null, [function (m__95) {
                  return m_continue.apply(null, [m_nil]).apply(null, [m_path]).apply(null, [m_cdr.apply(null, [m_input])]).apply(null, [m_next_45char.apply(null, [m_position])]);
                }]).apply(null, [m_nil]);
              }]).apply(null, [function (m__95) {
                return m_parse_45symbol_45literal.apply(null, [m_path]).apply(null, [m_cdr.apply(null, [m_input])]).apply(null, [m_char_46_61.apply(null, [m_head]).apply(null, [m_linefeed]).apply(null, [function (m__95) {
                  return m_next_45line;
                }]).apply(null, [function (m__95) {
                  return m_next_45char;
                }]).apply(null, [m_nil]).apply(null, [m_position])]).apply(null, [function (m_chars) {
                  return function (m_path) {
                    return function (m_input) {
                      return function (m_position) {
                        return m_continue.apply(null, [m_cons.apply(null, [m_head]).apply(null, [m_chars])]).apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position]);
                      };
                    };
                  };
                }]);
              }]).apply(null, [m_nil]);
            }]);
          }]).apply(null, [m_nil]);
        };
      };
    };
  };
}]);
exports.m_parse_45symbol_45literal = m_parse_45symbol_45literal;
var m_parse_45list = m_fix.apply(null, [function (m_parse_45list) {
  return function (m_parse_45expr) {
    return function (m_path) {
      return function (m_input) {
        return function (m_position) {
          return function (m_continue) {
            return m_nil_63.apply(null, [m_input]).apply(null, [function (m__95) {
              return m_error.apply(null, [__to_m_symbol('Unexpected end of file')]);
            }]).apply(null, [function (m__95) {
              return m_char_46_61.apply(null, [m_car.apply(null, [m_input])]).apply(null, [m_close_45parentheses]).apply(null, [function (m__95) {
                return m_continue.apply(null, [m_nil]).apply(null, [m_path]).apply(null, [m_cdr.apply(null, [m_input])]).apply(null, [m_next_45char.apply(null, [m_position])]);
              }]).apply(null, [function (m__95) {
                return m_parse_45unused.apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position]).apply(null, [function (m_path) {
                  return function (m_input) {
                    return function (m_position) {
                      return m_parse_45expr.apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position]).apply(null, [function (m_expr) {
                        return function (m_path) {
                          return function (m_input) {
                            return function (m_position) {
                              return m_parse_45list.apply(null, [m_parse_45expr]).apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position]).apply(null, [function (m_exprs) {
                                return function (m_path) {
                                  return function (m_input) {
                                    return function (m_position) {
                                      return m_continue.apply(null, [m_cons.apply(null, [m_expr]).apply(null, [m_exprs])]).apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position]);
                                    };
                                  };
                                };
                              }]);
                            };
                          };
                        };
                      }]);
                    };
                  };
                }]);
              }]).apply(null, [m_nil]);
            }]).apply(null, [m_nil]);
          };
        };
      };
    };
  };
}]);
exports.m_parse_45list = m_parse_45list;
var m_parse_45expr = m_fix.apply(null, [function (m_parse_45expr) {
  return function (m_path) {
    return function (m_input) {
      return function (m_position) {
        return function (m_continue) {
          return m_with.apply(null, [m_car.apply(null, [m_input])]).apply(null, [function (m_head) {
            return m_char_46_61.apply(null, [m_head]).apply(null, [m_open_45parentheses]).apply(null, [function (m__95) {
              return m_parse_45list.apply(null, [m_parse_45expr]).apply(null, [m_path]).apply(null, [m_cdr.apply(null, [m_input])]).apply(null, [m_next_45char.apply(null, [m_position])]).apply(null, [function (m_exprs) {
                return function (m_path) {
                  return function (m_input) {
                    return function (m_position_39) {
                      return m_continue.apply(null, [m_list_45expr.apply(null, [m_exprs]).apply(null, [m_path]).apply(null, [m_position]).apply(null, [m_position_39])]).apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position_39]);
                    };
                  };
                };
              }]);
            }]).apply(null, [function (m__95) {
              return m_char_46_61.apply(null, [m_head]).apply(null, [m_quote]).apply(null, [function (m__95) {
                return m_parse_45symbol_45literal.apply(null, [m_path]).apply(null, [m_cdr.apply(null, [m_input])]).apply(null, [m_next_45char.apply(null, [m_position])]).apply(null, [function (m_chars) {
                  return function (m_path) {
                    return function (m_input) {
                      return function (m_position_39) {
                        return m_continue.apply(null, [m_symbol_45expr.apply(null, [m_chars]).apply(null, [m_path]).apply(null, [m_position]).apply(null, [m_position_39])]).apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position_39]);
                      };
                    };
                  };
                }]);
              }]).apply(null, [function (m__95) {
                return m_parse_45symbol.apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position]).apply(null, [function (m_chars) {
                  return function (m_path) {
                    return function (m_input) {
                      return function (m_position_39) {
                        return m_continue.apply(null, [m_symbol_45expr.apply(null, [m_chars]).apply(null, [m_path]).apply(null, [m_position]).apply(null, [m_position_39])]).apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position_39]);
                      };
                    };
                  };
                }]);
              }]).apply(null, [m_nil]);
            }]).apply(null, [m_nil]);
          }]);
        };
      };
    };
  };
}]);
exports.m_parse_45expr = m_parse_45expr;

var m_repl_45parse = function m_repl_45parse(m_line) {
  return function (m_index) {
    return m_parse_45expr.apply(null, [m_mangle_45fn_45name.apply(null, [__to_m_symbol('repl')]).apply(null, [m_index])]).apply(null, [m_append.apply(null, [m_line]).apply(null, [m_linefeed])]).apply(null, [m_position.apply(null, [m_index]).apply(null, [m_nat_46_49])]).apply(null, [function (m_expr) {
      return function (m_path) {
        return function (m_input) {
          return function (m_position) {
            return m_expr;
          };
        };
      };
    }]);
  };
};

exports.m_repl_45parse = m_repl_45parse;
var m_parse = m_fix.apply(null, [function (m_parse) {
  return function (m_path) {
    return function (m_input) {
      return function (m_position) {
        return m_parse_45unused.apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position]).apply(null, [function (m_path) {
          return function (m_input) {
            return function (m_position) {
              return m_nil_63.apply(null, [m_input]).apply(null, [function (m__95) {
                return m_nil;
              }]).apply(null, [function (m__95) {
                return m_parse_45expr.apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position]).apply(null, [function (m_expr) {
                  return function (m_path) {
                    return function (m_input) {
                      return function (m_position) {
                        return m_cons.apply(null, [m_expr]).apply(null, [m_parse.apply(null, [m_path]).apply(null, [m_input]).apply(null, [m_position])]);
                      };
                    };
                  };
                }]);
              }]).apply(null, [m_nil]);
            };
          };
        }]);
      };
    };
  };
}]);
exports.m_parse = m_parse;

var m_generate_45result_46match = function m_generate_45result_46match(m_result) {
  return function (m_degenerate_39) {
    return function (m_generating_39) {
      return function (m_generated_39) {
        return m_generated_63.apply(null, [m_result]).apply(null, [function (m__95) {
          return m_generated_39.apply(null, [m_result]);
        }]).apply(null, [function (m__95) {
          return m_generating_63.apply(null, [m_result]).apply(null, [function (m__95) {
            return m_generating_39.apply(null, [m_result]);
          }]).apply(null, [function (m__95) {
            return m_degenerate_63.apply(null, [m_result]).apply(null, [function (m__95) {
              return m_degenerate_39.apply(null, [m_result]);
            }]).apply(null, [function (m__95) {
              return m_error.apply(null, [__to_m_symbol('...')]);
            }]).apply(null, [m_nil]);
          }]).apply(null, [m_nil]);
        }]).apply(null, [m_nil]);
      };
    };
  };
};

exports.m_generate_45result_46match = m_generate_45result_46match;

var m_as = function m_as(m_type) {
  return function (m_data) {
    return m_is_63.apply(null, [m_type]).apply(null, [m_data]).apply(null, [function (m__95) {
      return m_data;
    }]).apply(null, [function (m__95) {
      return m_error.apply(null, [m_concat.apply(null, [m_symbol_45_62list.apply(null, [__to_m_symbol('Could not cast ')])]).apply(null, [m_concat.apply(null, [m_symbol_45_62list.apply(null, [m_type_45name.apply(null, [m_data])])]).apply(null, [m_concat.apply(null, [m_symbol_45_62list.apply(null, [__to_m_symbol(' to ')])]).apply(null, [m_symbol_45_62list.apply(null, [m_type])])])])]);
    }]).apply(null, [m_nil]);
  };
};

exports.m_as = m_as;

var m_field = function m_field(m_type) {
  return function (m_name) {
    return function (m_data) {
      return m_second.apply(null, [m_as.apply(null, [m_type]).apply(null, [m_data])]).apply(null, [m_name]);
    };
  };
};

exports.m_field = m_field;
var m_generating_46dependencies = m_field.apply(null, [__to_m_symbol('generating')]).apply(null, [__to_m_symbol('dependencies')]);
exports.m_generating_46dependencies = m_generating_46dependencies;
var m_generating_46global_45env = m_field.apply(null, [__to_m_symbol('generating')]).apply(null, [__to_m_symbol('global-env')]);
exports.m_generating_46global_45env = m_generating_46global_45env;
var m_generating_46continue = m_field.apply(null, [__to_m_symbol('generating')]).apply(null, [__to_m_symbol('continue')]);
exports.m_generating_46continue = m_generating_46continue;

var m_generated_45resolve_45generating = function m_generated_45resolve_45generating(m_generated_46combine) {
  return function (m_generated_39) {
    return function (m_generating_39) {
      return function (m_global_45env) {
        return function (m_f) {
          return m_generating.apply(null, [m_generating_46dependencies.apply(null, [m_generating_39])]).apply(null, [m_global_45env]).apply(null, [function (m_global_45env) {
            return m_generated_46combine.apply(null, [m_generated_39]).apply(null, [m_generating_46continue.apply(null, [m_generating_39]).apply(null, [m_global_45env])]).apply(null, [m_global_45env]).apply(null, [m_f]);
          }]);
        };
      };
    };
  };
};

exports.m_generated_45resolve_45generating = m_generated_45resolve_45generating;
var m_generated_46operation = m_field.apply(null, [__to_m_symbol('generated')]).apply(null, [__to_m_symbol('operation')]);
exports.m_generated_46operation = m_generated_46operation;
var m_generated_46declarations = m_field.apply(null, [__to_m_symbol('generated')]).apply(null, [__to_m_symbol('declarations')]);
exports.m_generated_46declarations = m_generated_46declarations;
var m_generated_46global_45env = m_field.apply(null, [__to_m_symbol('generated')]).apply(null, [__to_m_symbol('global-env')]);
exports.m_generated_46global_45env = m_generated_46global_45env;
var m_degenerate_46errors = m_field.apply(null, [__to_m_symbol('degenerate')]).apply(null, [__to_m_symbol('errors')]);
exports.m_degenerate_46errors = m_degenerate_46errors;

var m_degenerate_46with_45global_45env = function m_degenerate_46with_45global_45env(m_env) {
  return function (m_degenerate_39) {
    return m_degenerate.apply(null, [m_degenerate_46errors.apply(null, [m_degenerate_39])]).apply(null, [m_env]);
  };
};

exports.m_degenerate_46with_45global_45env = m_degenerate_46with_45global_45env;
var m_generated_46combine = m_fix.apply(null, [function (m_generated_46combine) {
  return function (m_generated_49) {
    return function (m_result) {
      return function (m_global_45env) {
        return function (m_f) {
          return m_generate_45result_46match.apply(null, [m_result]).apply(null, [function (m_degenerate_50) {
            return m_degenerate_46with_45global_45env.apply(null, [m_global_45env]).apply(null, [m_degenerate_50]);
          }]).apply(null, [function (m_generating_50) {
            return m_generated_45resolve_45generating.apply(null, [m_generated_46combine]).apply(null, [m_generated_49]).apply(null, [m_generating_50]).apply(null, [m_global_45env]).apply(null, [m_f]);
          }]).apply(null, [function (m_generated_50) {
            return m_generated.apply(null, [m_f.apply(null, [m_generated_46operation.apply(null, [m_generated_49])]).apply(null, [m_generated_46operation.apply(null, [m_generated_50])])]).apply(null, [m_concat.apply(null, [m_generated_46declarations.apply(null, [m_generated_49])]).apply(null, [m_generated_46declarations.apply(null, [m_generated_50])])]).apply(null, [m_global_45env]);
          }]);
        };
      };
    };
  };
}]);
exports.m_generated_46combine = m_generated_46combine;
var m_generating_46combine = m_fix.apply(null, [function (m_generating_46combine) {
  return function (m_generating_49) {
    return function (m_result) {
      return function (m_global_45env) {
        return function (m_f) {
          return m_generate_45result_46match.apply(null, [m_result]).apply(null, [function (m_degenerate_50) {
            return m_degenerate_46with_45global_45env.apply(null, [m_global_45env]).apply(null, [m_degenerate_50]);
          }]).apply(null, [function (m_generating_50) {
            return m_generating.apply(null, [m_concat.apply(null, [m_generating_46dependencies.apply(null, [m_generating_49])]).apply(null, [m_generating_46dependencies.apply(null, [m_generating_50])])]).apply(null, [m_global_45env]).apply(null, [function (m_global_45env) {
              return m_generating_46combine.apply(null, [m_generating_49]).apply(null, [m_generating_50]).apply(null, [m_global_45env]).apply(null, [m_f]);
            }]);
          }]).apply(null, [function (m_generated_50) {
            return m_generated_45resolve_45generating.apply(null, [m_generated_46combine]).apply(null, [m_generated_50]).apply(null, [m_generating_49]).apply(null, [m_global_45env]).apply(null, [m_swap.apply(null, [m_f])]);
          }]);
        };
      };
    };
  };
}]);
exports.m_generating_46combine = m_generating_46combine;

var m_degenerate_46combine = function m_degenerate_46combine(m_degenerate_49) {
  return function (m_result) {
    return function (m_global_45env) {
      return function (m_f) {
        return m_generate_45result_46match.apply(null, [m_result]).apply(null, [function (m_degenerate_50) {
          return m_degenerate.apply(null, [m_concat.apply(null, [m_degenerate_46errors.apply(null, [m_degenerate_49])]).apply(null, [m_degenerate_46errors.apply(null, [m_degenerate_50])])]).apply(null, [m_global_45env]);
        }]).apply(null, [function (m_generating_50) {
          return m_degenerate_46with_45global_45env.apply(null, [m_global_45env]).apply(null, [m_degenerate_49]);
        }]).apply(null, [function (m_generated_50) {
          return m_degenerate_46with_45global_45env.apply(null, [m_global_45env]).apply(null, [m_degenerate_49]);
        }]);
      };
    };
  };
};

exports.m_degenerate_46combine = m_degenerate_46combine;

var m_generate_45result_46combine = function m_generate_45result_46combine(m_result_49) {
  return function (m_result_50) {
    return function (m_global_45env) {
      return function (m_f) {
        return m_generate_45result_46match.apply(null, [m_result_49]).apply(null, [function (m_degenerate_49) {
          return m_degenerate_46combine.apply(null, [m_degenerate_49]).apply(null, [m_result_50]).apply(null, [m_global_45env]).apply(null, [m_f]);
        }]).apply(null, [function (m_generating_49) {
          return m_generating_46combine.apply(null, [m_generating_49]).apply(null, [m_result_50]).apply(null, [m_global_45env]).apply(null, [m_f]);
        }]).apply(null, [function (m_generated_49) {
          return m_generated_46combine.apply(null, [m_generated_49]).apply(null, [m_result_50]).apply(null, [m_global_45env]).apply(null, [m_f]);
        }]);
      };
    };
  };
};

exports.m_generate_45result_46combine = m_generate_45result_46combine;

var m_write_45result = function m_write_45result(m_backend) {
  return function (m_result) {
    return function (m_out) {
      return m_generate_45result_46match.apply(null, [m_result]).apply(null, [function (m_degenerate_39) {
        return m_impure.apply(null, [m_error.apply(null, [m_car.apply(null, [m_degenerate_46errors.apply(null, [m_degenerate_39])])])]);
      }]).apply(null, [function (m_generating_39) {
        return m_impure.apply(null, [m_error.apply(null, [m_flat_45map.apply(null, [m_generating_46dependencies.apply(null, [m_generating_39])]).apply(null, [m_swap.apply(null, [m_append]).apply(null, [m_space])])])]);
      }]).apply(null, [function (m_generated_39) {
        return m_backend.apply(null, [m_out]).apply(null, [m_generated_46operation.apply(null, [m_generated_39])]).apply(null, [m_generated_46declarations.apply(null, [m_generated_39])]);
      }]);
    };
  };
};

exports.m_write_45result = m_write_45result;
var m_degenerate_46global_45env = m_field.apply(null, [__to_m_symbol('degenerate')]).apply(null, [__to_m_symbol('global-env')]);
exports.m_degenerate_46global_45env = m_degenerate_46global_45env;

var m_generate_45result_46global_45env = function m_generate_45result_46global_45env(m_result) {
  return m_generate_45result_46match.apply(null, [m_result]).apply(null, [m_degenerate_46global_45env]).apply(null, [m_generating_46global_45env]).apply(null, [m_generated_46global_45env]);
};

exports.m_generate_45result_46global_45env = m_generate_45result_46global_45env;

var m_generate_45apply_45expr_39 = function m_generate_45apply_45expr_39(m_fn_45result) {
  return function (m_arg_45result) {
    return m_generate_45result_46combine.apply(null, [m_fn_45result]).apply(null, [m_arg_45result]).apply(null, [m_generate_45result_46global_45env.apply(null, [m_arg_45result])]).apply(null, [m_apply_45operation]);
  };
};

exports.m_generate_45apply_45expr_39 = m_generate_45apply_45expr_39;

var m_generate_45apply_45expr = function m_generate_45apply_45expr(m_generate_45expr) {
  return function (m_fn) {
    return function (m_args) {
      return function (m_local_45env) {
        return function (m_global_45env) {
          return m_with.apply(null, [m_generate_45expr.apply(null, [m_fn]).apply(null, [m_local_45env]).apply(null, [m_global_45env])]).apply(null, [function (m_fn_45result) {
            return m_fold.apply(null, [m_args]).apply(null, [m_fn_45result]).apply(null, [function (m_fn_45result) {
              return function (m_arg) {
                return m_with.apply(null, [m_generate_45expr.apply(null, [m_arg]).apply(null, [m_local_45env]).apply(null, [m_generate_45result_46global_45env.apply(null, [m_fn_45result])])]).apply(null, [function (m_arg_45result) {
                  return m_generate_45apply_45expr_39.apply(null, [m_fn_45result]).apply(null, [m_arg_45result]);
                }]);
              };
            }]);
          }]);
        };
      };
    };
  };
};

exports.m_generate_45apply_45expr = m_generate_45apply_45expr;
var m_def_45declaration_46name = m_field.apply(null, [__to_m_symbol('def-declaration')]).apply(null, [__to_m_symbol('name')]);
exports.m_def_45declaration_46name = m_def_45declaration_46name;
var m_def_45declaration_46path = m_field.apply(null, [__to_m_symbol('def-declaration')]).apply(null, [__to_m_symbol('path')]);
exports.m_def_45declaration_46path = m_def_45declaration_46path;

var m_put_45refs = function m_put_45refs(m_declarations) {
  return function (m_ref_45root) {
    return m_with.apply(null, [m_filter.apply(null, [m_declarations]).apply(null, [m_def_45declaration_63])]).apply(null, [function (m_def_45declarations) {
      return m_fold.apply(null, [m_def_45declarations]).apply(null, [m_impure.apply(null, [m_nil])]).apply(null, [function (m_process) {
        return function (m_declaration) {
          return m_then_45run.apply(null, [m_process]).apply(null, [m_file_46write.apply(null, [m_file_46child.apply(null, [m_ref_45root]).apply(null, [m_normalize.apply(null, [m_def_45declaration_46name.apply(null, [m_declaration])])])]).apply(null, [m_def_45declaration_46path.apply(null, [m_declaration])])]);
        };
      }]);
    }]);
  };
};

exports.m_put_45refs = m_put_45refs;

var m_mpm_45put_45refs = function m_mpm_45put_45refs(m_declarations) {
  return m_put_45refs.apply(null, [m_declarations]).apply(null, [m_mpm_45ref_45root]);
};

exports.m_mpm_45put_45refs = m_mpm_45put_45refs;
var m_def_45declaration_46value = m_field.apply(null, [__to_m_symbol('def-declaration')]).apply(null, [__to_m_symbol('value')]);
exports.m_def_45declaration_46value = m_def_45declaration_46value;
var m_fn_45declaration_46name = m_field.apply(null, [__to_m_symbol('fn-declaration')]).apply(null, [__to_m_symbol('name')]);
exports.m_fn_45declaration_46name = m_fn_45declaration_46name;

var m_declaration_46name = function m_declaration_46name(m_declaration) {
  return m_def_45declaration_63.apply(null, [m_declaration]).apply(null, [function (m__95) {
    return m_def_45declaration_46name.apply(null, [m_declaration]);
  }]).apply(null, [function (m__95) {
    return m_fn_45declaration_46name.apply(null, [m_declaration]);
  }]).apply(null, [m_nil]);
};

exports.m_declaration_46name = m_declaration_46name;
var m_fn_45declaration_46path = m_field.apply(null, [__to_m_symbol('fn-declaration')]).apply(null, [__to_m_symbol('path')]);
exports.m_fn_45declaration_46path = m_fn_45declaration_46path;
var m_fn_45declaration_46closures = m_field.apply(null, [__to_m_symbol('fn-declaration')]).apply(null, [__to_m_symbol('closures')]);
exports.m_fn_45declaration_46closures = m_fn_45declaration_46closures;
var m_fn_45declaration_46value = m_field.apply(null, [__to_m_symbol('fn-declaration')]).apply(null, [__to_m_symbol('value')]);
exports.m_fn_45declaration_46value = m_fn_45declaration_46value;

var m_declaration_46value = function m_declaration_46value(m_declaration) {
  return m_def_45declaration_63.apply(null, [m_declaration]).apply(null, [function (m__95) {
    return m_def_45declaration_46value.apply(null, [m_declaration]);
  }]).apply(null, [function (m__95) {
    return m_fn_45declaration_46value.apply(null, [m_declaration]);
  }]).apply(null, [m_nil]);
};

exports.m_declaration_46value = m_declaration_46value;
var m_local_45env_46locals = m_field.apply(null, [__to_m_symbol('local-env')]).apply(null, [__to_m_symbol('locals')]);
exports.m_local_45env_46locals = m_local_45env_46locals;

var m_local_45env_46with_45def = function m_local_45env_46with_45def(m_def) {
  return function (m_e) {
    return m_local_45env.apply(null, [m_local_45env_46locals.apply(null, [m_e])]).apply(null, [m_def]);
  };
};

exports.m_local_45env_46with_45def = m_local_45env_46with_45def;
var m_local_45env_46def = m_field.apply(null, [__to_m_symbol('local-env')]).apply(null, [__to_m_symbol('def')]);
exports.m_local_45env_46def = m_local_45env_46def;

var m_local_45env_46with_45locals = function m_local_45env_46with_45locals(m_locals) {
  return function (m_e) {
    return m_local_45env.apply(null, [m_locals]).apply(null, [m_local_45env_46def.apply(null, [m_e])]);
  };
};

exports.m_local_45env_46with_45locals = m_local_45env_46with_45locals;
var m_global_45env_46globals = m_field.apply(null, [__to_m_symbol('global-env')]).apply(null, [__to_m_symbol('globals')]);
exports.m_global_45env_46globals = m_global_45env_46globals;
var m_global_45env_46heap = m_field.apply(null, [__to_m_symbol('global-env')]).apply(null, [__to_m_symbol('heap')]);
exports.m_global_45env_46heap = m_global_45env_46heap;
var m_global_45env_46dependents = m_field.apply(null, [__to_m_symbol('global-env')]).apply(null, [__to_m_symbol('dependents')]);
exports.m_global_45env_46dependents = m_global_45env_46dependents;

var m_global_45env_46with_45index = function m_global_45env_46with_45index(m_index) {
  return function (m_e) {
    return m_global_45env.apply(null, [m_global_45env_46globals.apply(null, [m_e])]).apply(null, [m_global_45env_46heap.apply(null, [m_e])]).apply(null, [m_global_45env_46dependents.apply(null, [m_e])]).apply(null, [m_index]);
  };
};

exports.m_global_45env_46with_45index = m_global_45env_46with_45index;
var m_global_45env_46index = m_field.apply(null, [__to_m_symbol('global-env')]).apply(null, [__to_m_symbol('index')]);
exports.m_global_45env_46index = m_global_45env_46index;

var m_global_45env_46with_45dependents = function m_global_45env_46with_45dependents(m_dependents) {
  return function (m_e) {
    return m_global_45env.apply(null, [m_global_45env_46globals.apply(null, [m_e])]).apply(null, [m_global_45env_46heap.apply(null, [m_e])]).apply(null, [m_dependents]).apply(null, [m_global_45env_46index.apply(null, [m_e])]);
  };
};

exports.m_global_45env_46with_45dependents = m_global_45env_46with_45dependents;

var m_global_45env_46with_45heap = function m_global_45env_46with_45heap(m_heap) {
  return function (m_e) {
    return m_global_45env.apply(null, [m_global_45env_46globals.apply(null, [m_e])]).apply(null, [m_heap]).apply(null, [m_global_45env_46dependents.apply(null, [m_e])]).apply(null, [m_global_45env_46index.apply(null, [m_e])]);
  };
};

exports.m_global_45env_46with_45heap = m_global_45env_46with_45heap;

var m_global_45env_46with_45globals = function m_global_45env_46with_45globals(m_globals) {
  return function (m_e) {
    return m_global_45env.apply(null, [m_globals]).apply(null, [m_global_45env_46heap.apply(null, [m_e])]).apply(null, [m_global_45env_46dependents.apply(null, [m_e])]).apply(null, [m_global_45env_46index.apply(null, [m_e])]);
  };
};

exports.m_global_45env_46with_45globals = m_global_45env_46with_45globals;
var m_local_45variable_45operation_46name = m_field.apply(null, [__to_m_symbol('local-variable-operation')]).apply(null, [__to_m_symbol('name')]);
exports.m_local_45variable_45operation_46name = m_local_45variable_45operation_46name;

var m_desugar_45local_45variable_45operation = function m_desugar_45local_45variable_45operation(m_desugar_45operation) {
  return function (m_operation) {
    return m_desugar_45quote.apply(null, [m_local_45variable_45operation_46name.apply(null, [m_operation])]);
  };
};

exports.m_desugar_45local_45variable_45operation = m_desugar_45local_45variable_45operation;
var m_local_45variable_45operation_46index = m_field.apply(null, [__to_m_symbol('local-variable-operation')]).apply(null, [__to_m_symbol('index')]);
exports.m_local_45variable_45operation_46index = m_local_45variable_45operation_46index;

var m_interpret_45local_45variable_45operation = function m_interpret_45local_45variable_45operation(m_interpret_45operation_39) {
  return function (m_operation) {
    return function (m_stack) {
      return function (m_heap) {
        return m_get.apply(null, [m_stack]).apply(null, [m_local_45variable_45operation_46index.apply(null, [m_operation])]);
      };
    };
  };
};

exports.m_interpret_45local_45variable_45operation = m_interpret_45local_45variable_45operation;
var m_global_45variable_45operation_46name = m_field.apply(null, [__to_m_symbol('global-variable-operation')]).apply(null, [__to_m_symbol('name')]);
exports.m_global_45variable_45operation_46name = m_global_45variable_45operation_46name;

var m_desugar_45global_45variable_45operation = function m_desugar_45global_45variable_45operation(m_desugar_45operation) {
  return function (m_operation) {
    return m_desugar_45quote.apply(null, [m_global_45variable_45operation_46name.apply(null, [m_operation])]);
  };
};

exports.m_desugar_45global_45variable_45operation = m_desugar_45global_45variable_45operation;
var m_global_45variable_45operation_46path = m_field.apply(null, [__to_m_symbol('global-variable-operation')]).apply(null, [__to_m_symbol('path')]);
exports.m_global_45variable_45operation_46path = m_global_45variable_45operation_46path;
var m_if_45operation_46cond = m_field.apply(null, [__to_m_symbol('if-operation')]).apply(null, [__to_m_symbol('cond')]);
exports.m_if_45operation_46cond = m_if_45operation_46cond;
var m_if_45operation_46true = m_field.apply(null, [__to_m_symbol('if-operation')]).apply(null, [__to_m_symbol('true')]);
exports.m_if_45operation_46true = m_if_45operation_46true;
var m_if_45operation_46false = m_field.apply(null, [__to_m_symbol('if-operation')]).apply(null, [__to_m_symbol('false')]);
exports.m_if_45operation_46false = m_if_45operation_46false;

var m_interpret_45if_45operation = function m_interpret_45if_45operation(m_interpret_45operation_39) {
  return function (m_operation) {
    return function (m_stack) {
      return function (m_heap) {
        return m_interpret_45operation_39.apply(null, [m_if_45operation_46cond.apply(null, [m_operation])]).apply(null, [m_stack]).apply(null, [m_heap]).apply(null, [function (m__95) {
          return m_interpret_45operation_39.apply(null, [m_if_45operation_46true.apply(null, [m_operation])]).apply(null, [m_stack]).apply(null, [m_heap]);
        }]).apply(null, [function (m__95) {
          return m_interpret_45operation_39.apply(null, [m_if_45operation_46false.apply(null, [m_operation])]).apply(null, [m_stack]).apply(null, [m_heap]);
        }]).apply(null, [m_nil]);
      };
    };
  };
};

exports.m_interpret_45if_45operation = m_interpret_45if_45operation;
var m_def_45operation_46name = m_field.apply(null, [__to_m_symbol('def-operation')]).apply(null, [__to_m_symbol('name')]);
exports.m_def_45operation_46name = m_def_45operation_46name;

var m_desugar_45def_45operation = function m_desugar_45def_45operation(m_desugar_45operation) {
  return function (m_operation) {
    return m_def_45operation_46name.apply(null, [m_operation]);
  };
};

exports.m_desugar_45def_45operation = m_desugar_45def_45operation;
var m_def_45operation_46path = m_field.apply(null, [__to_m_symbol('def-operation')]).apply(null, [__to_m_symbol('path')]);
exports.m_def_45operation_46path = m_def_45operation_46path;
var m_def_45operation_46value = m_field.apply(null, [__to_m_symbol('def-operation')]).apply(null, [__to_m_symbol('value')]);
exports.m_def_45operation_46value = m_def_45operation_46value;
var m_fn_45operation_46path = m_field.apply(null, [__to_m_symbol('fn-operation')]).apply(null, [__to_m_symbol('path')]);
exports.m_fn_45operation_46path = m_fn_45operation_46path;
var m_fn_45operation_46name = m_field.apply(null, [__to_m_symbol('fn-operation')]).apply(null, [__to_m_symbol('name')]);
exports.m_fn_45operation_46name = m_fn_45operation_46name;
var m_fn_45operation_46arg = m_field.apply(null, [__to_m_symbol('fn-operation')]).apply(null, [__to_m_symbol('arg')]);
exports.m_fn_45operation_46arg = m_fn_45operation_46arg;
var m_fn_45operation_46value = m_field.apply(null, [__to_m_symbol('fn-operation')]).apply(null, [__to_m_symbol('value')]);
exports.m_fn_45operation_46value = m_fn_45operation_46value;

var m_desugar_45fn_45operation = function m_desugar_45fn_45operation(m_desugar_45operation) {
  return function (m_operation) {
    return m_concat.apply(null, [__to_m_symbol('(fn ')]).apply(null, [m_concat.apply(null, [m_desugar_45quote.apply(null, [m_fn_45operation_46arg.apply(null, [m_operation])])]).apply(null, [m_concat.apply(null, [__to_m_symbol(' ')]).apply(null, [m_concat.apply(null, [m_desugar_45operation.apply(null, [m_fn_45operation_46value.apply(null, [m_operation])])]).apply(null, [__to_m_symbol(')')])])])]);
  };
};

exports.m_desugar_45fn_45operation = m_desugar_45fn_45operation;
var m_fn_45operation_46closures = m_field.apply(null, [__to_m_symbol('fn-operation')]).apply(null, [__to_m_symbol('closures')]);
exports.m_fn_45operation_46closures = m_fn_45operation_46closures;
var m_symbol_45operation_46name = m_field.apply(null, [__to_m_symbol('symbol-operation')]).apply(null, [__to_m_symbol('name')]);
exports.m_symbol_45operation_46name = m_symbol_45operation_46name;

var m_interpret_45symbol_45operation = function m_interpret_45symbol_45operation(m_interpret_45operation_39) {
  return function (m_operation) {
    return function (m_stack) {
      return function (m_heap) {
        return m_symbol_45operation_46name.apply(null, [m_operation]);
      };
    };
  };
};

exports.m_interpret_45symbol_45operation = m_interpret_45symbol_45operation;

var m_desugar_45symbol_45operation = function m_desugar_45symbol_45operation(m_desugar_45operation) {
  return function (m_operation) {
    return m_concat.apply(null, [__to_m_symbol('(symbol ')]).apply(null, [m_concat.apply(null, [m_desugar_45quote.apply(null, [m_symbol_45operation_46name.apply(null, [m_operation])])]).apply(null, [__to_m_symbol(')')])]);
  };
};

exports.m_desugar_45symbol_45operation = m_desugar_45symbol_45operation;
var m_apply_45operation_46fn = m_field.apply(null, [__to_m_symbol('apply-operation')]).apply(null, [__to_m_symbol('fn')]);
exports.m_apply_45operation_46fn = m_apply_45operation_46fn;
var m_apply_45operation_46arg = m_field.apply(null, [__to_m_symbol('apply-operation')]).apply(null, [__to_m_symbol('arg')]);
exports.m_apply_45operation_46arg = m_apply_45operation_46arg;

var m_interpret_45apply_45operation = function m_interpret_45apply_45operation(m_interpret_45operation_39) {
  return function (m_operation) {
    return function (m_stack) {
      return function (m_heap) {
        return m_interpret_45operation_39.apply(null, [m_apply_45operation_46fn.apply(null, [m_operation])]).apply(null, [m_stack]).apply(null, [m_heap]).apply(null, [m_interpret_45operation_39.apply(null, [m_apply_45operation_46arg.apply(null, [m_operation])]).apply(null, [m_stack]).apply(null, [m_heap])]);
      };
    };
  };
};

exports.m_interpret_45apply_45operation = m_interpret_45apply_45operation;

var m_desugar_45apply_45operation = function m_desugar_45apply_45operation(m_desugar_45operation) {
  return function (m_operation) {
    return m_concat.apply(null, [__to_m_symbol('(')]).apply(null, [m_concat.apply(null, [m_desugar_45operation.apply(null, [m_apply_45operation_46fn.apply(null, [m_operation])])]).apply(null, [m_concat.apply(null, [__to_m_symbol(' ')]).apply(null, [m_concat.apply(null, [m_desugar_45operation.apply(null, [m_apply_45operation_46arg.apply(null, [m_operation])])]).apply(null, [__to_m_symbol(')')])])])]);
  };
};

exports.m_desugar_45apply_45operation = m_desugar_45apply_45operation;
var m_line_45number_45operation_46operation = m_field.apply(null, [__to_m_symbol('line-number-operation')]).apply(null, [__to_m_symbol('operation')]);
exports.m_line_45number_45operation_46operation = m_line_45number_45operation_46operation;

var m_desugar_45line_45number_45operation = function m_desugar_45line_45number_45operation(m_desugar_45operation) {
  return function (m_operation) {
    return m_desugar_45operation.apply(null, [m_line_45number_45operation_46operation.apply(null, [m_operation])]);
  };
};

exports.m_desugar_45line_45number_45operation = m_desugar_45line_45number_45operation;
var m_desugar_45operation = m_fix.apply(null, [function (m_desugar_45operation) {
  return function (m_operation) {
    return m_with.apply(null, [m_type_45name.apply(null, [m_operation])]).apply(null, [function (m_type) {
      return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('local-variable-operation')]).apply(null, [function (m__95) {
        return m_desugar_45local_45variable_45operation;
      }]).apply(null, [function (m__95) {
        return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('global-variable-operation')]).apply(null, [function (m__95) {
          return m_desugar_45global_45variable_45operation;
        }]).apply(null, [function (m__95) {
          return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('def-operation')]).apply(null, [function (m__95) {
            return m_desugar_45def_45operation;
          }]).apply(null, [function (m__95) {
            return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('fn-operation')]).apply(null, [function (m__95) {
              return m_desugar_45fn_45operation;
            }]).apply(null, [function (m__95) {
              return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('symbol-operation')]).apply(null, [function (m__95) {
                return m_desugar_45symbol_45operation;
              }]).apply(null, [function (m__95) {
                return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('apply-operation')]).apply(null, [function (m__95) {
                  return m_desugar_45apply_45operation;
                }]).apply(null, [function (m__95) {
                  return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('line-number-operation')]).apply(null, [function (m__95) {
                    return m_desugar_45line_45number_45operation;
                  }]).apply(null, [function (m__95) {
                    return m_error.apply(null, [__to_m_symbol('...')]);
                  }]).apply(null, [m_nil]);
                }]).apply(null, [m_nil]);
              }]).apply(null, [m_nil]);
            }]).apply(null, [m_nil]);
          }]).apply(null, [m_nil]);
        }]).apply(null, [m_nil]);
      }]).apply(null, [m_nil]);
    }]).apply(null, [m_desugar_45operation]).apply(null, [m_operation]);
  };
}]);
exports.m_desugar_45operation = m_desugar_45operation;

var m_desugar_45def_45declaration = function m_desugar_45def_45declaration(m_declaration) {
  return m_concat.apply(null, [__to_m_symbol('(def ')]).apply(null, [m_concat.apply(null, [m_desugar_45quote.apply(null, [m_def_45declaration_46name.apply(null, [m_declaration])])]).apply(null, [m_concat.apply(null, [__to_m_symbol(' ')]).apply(null, [m_concat.apply(null, [m_desugar_45operation.apply(null, [m_def_45declaration_46value.apply(null, [m_declaration])])]).apply(null, [m_append.apply(null, [__to_m_symbol(')')]).apply(null, [m_linefeed])])])])]);
};

exports.m_desugar_45def_45declaration = m_desugar_45def_45declaration;

var m_desugar_45declaration = function m_desugar_45declaration(m_declaration) {
  return m_with.apply(null, [m_type_45name.apply(null, [m_declaration])]).apply(null, [function (m_type) {
    return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('def-declaration')]).apply(null, [function (m__95) {
      return m_desugar_45def_45declaration;
    }]).apply(null, [function (m__95) {
      return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('fn-declaration')]).apply(null, [function (m__95) {
        return m_desugar_45fn_45declaration;
      }]).apply(null, [function (m__95) {
        return m_error.apply(null, [__to_m_symbol('...')]);
      }]).apply(null, [m_nil]);
    }]).apply(null, [m_nil]);
  }]).apply(null, [m_declaration]);
};

exports.m_desugar_45declaration = m_desugar_45declaration;

var m_desugar_45declarations = function m_desugar_45declarations(m_declarations) {
  return m_flat_45map.apply(null, [m_declarations]).apply(null, [m_desugar_45declaration]);
};

exports.m_desugar_45declarations = m_desugar_45declarations;

var m_m_45backend = function m_m_45backend(m_out) {
  return function (m_operation) {
    return function (m_declarations) {
      return m_with.apply(null, [m_desugar_45declarations.apply(null, [m_declarations])]).apply(null, [function (m_desugared) {
        return m_file_46write.apply(null, [m_out]).apply(null, [m_desugared]);
      }]);
    };
  };
};

exports.m_m_45backend = m_m_45backend;

var m_get_45backend = function m_get_45backend(m_name) {
  return m_symbol_46_61.apply(null, [m_name]).apply(null, [__to_m_symbol('m')]).apply(null, [function (m__95) {
    return m_m_45backend;
  }]).apply(null, [function (m__95) {
    return m_symbol_46_61.apply(null, [m_name]).apply(null, [__to_m_symbol('jvm')]).apply(null, [function (m__95) {
      return m_jvm_45backend;
    }]).apply(null, [function (m__95) {
      return m_error.apply(null, [m_concat.apply(null, [__to_m_symbol('Could not find backend ')]).apply(null, [m_name])]);
    }]).apply(null, [m_nil]);
  }]).apply(null, [m_nil]);
};

exports.m_get_45backend = m_get_45backend;

var m_interpret_45line_45number_45operation = function m_interpret_45line_45number_45operation(m_interpret_45operation_39) {
  return function (m_operation) {
    return m_interpret_45operation_39.apply(null, [m_line_45number_45operation_46operation.apply(null, [m_operation])]);
  };
};

exports.m_interpret_45line_45number_45operation = m_interpret_45line_45number_45operation;
var m_operation_46fold = m_fix.apply(null, [function (m_operation_46fold) {
  return function (m_operation) {
    return function (m_acc) {
      return function (m_f) {
        return m_f.apply(null, [m_with.apply(null, [m_type_45name.apply(null, [m_operation])]).apply(null, [function (m_type) {
          return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('local-variable-operation')]).apply(null, [function (m__95) {
            return m_acc;
          }]).apply(null, [function (m__95) {
            return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('global-variable-operation')]).apply(null, [function (m__95) {
              return m_acc;
            }]).apply(null, [function (m__95) {
              return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('if-operation')]).apply(null, [function (m__95) {
                return m_operation_46fold.apply(null, [m_if_45operation_46false.apply(null, [m_operation])]).apply(null, [m_operation_46fold.apply(null, [m_if_45operation_46true.apply(null, [m_operation])]).apply(null, [m_operation_46fold.apply(null, [m_if_45operation_46cond.apply(null, [m_operation])]).apply(null, [m_acc]).apply(null, [m_f])]).apply(null, [m_f])]).apply(null, [m_f]);
              }]).apply(null, [function (m__95) {
                return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('def-operation')]).apply(null, [function (m__95) {
                  return m_operation_46fold.apply(null, [m_def_45operation_46value.apply(null, [m_operation])]).apply(null, [m_acc]).apply(null, [m_f]);
                }]).apply(null, [function (m__95) {
                  return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('fn-operation')]).apply(null, [function (m__95) {
                    return m_operation_46fold.apply(null, [m_fn_45operation_46value.apply(null, [m_operation])]).apply(null, [m_acc]).apply(null, [m_f]);
                  }]).apply(null, [function (m__95) {
                    return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('symbol-operation')]).apply(null, [function (m__95) {
                      return m_acc;
                    }]).apply(null, [function (m__95) {
                      return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('apply-operation')]).apply(null, [function (m__95) {
                        return m_operation_46fold.apply(null, [m_apply_45operation_46arg.apply(null, [m_operation])]).apply(null, [m_operation_46fold.apply(null, [m_apply_45operation_46fn.apply(null, [m_operation])]).apply(null, [m_acc]).apply(null, [m_f])]).apply(null, [m_f]);
                      }]).apply(null, [function (m__95) {
                        return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('line-number-operation')]).apply(null, [function (m__95) {
                          return m_operation_46fold.apply(null, [m_line_45number_45operation_46operation.apply(null, [m_operation])]).apply(null, [m_acc]).apply(null, [m_f]);
                        }]).apply(null, [function (m__95) {
                          return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('nil-operation')]).apply(null, [function (m__95) {
                            return m_acc;
                          }]).apply(null, [function (m__95) {
                            return m_error.apply(null, [__to_m_symbol('...')]);
                          }]).apply(null, [m_nil]);
                        }]).apply(null, [m_nil]);
                      }]).apply(null, [m_nil]);
                    }]).apply(null, [m_nil]);
                  }]).apply(null, [m_nil]);
                }]).apply(null, [m_nil]);
              }]).apply(null, [m_nil]);
            }]).apply(null, [m_nil]);
          }]).apply(null, [m_nil]);
        }])]).apply(null, [m_operation]);
      };
    };
  };
}]);
exports.m_operation_46fold = m_operation_46fold;
var m_line_45number_45operation_46line = m_field.apply(null, [__to_m_symbol('line-number-operation')]).apply(null, [__to_m_symbol('line')]);
exports.m_line_45number_45operation_46line = m_line_45number_45operation_46line;
var m_local_45variable_46name = m_field.apply(null, [__to_m_symbol('local-variable')]).apply(null, [__to_m_symbol('name')]);
exports.m_local_45variable_46name = m_local_45variable_46name;
var m_local_45variable_46index = m_field.apply(null, [__to_m_symbol('local-variable')]).apply(null, [__to_m_symbol('index')]);
exports.m_local_45variable_46index = m_local_45variable_46index;
var m_global_45variable_46name = m_field.apply(null, [__to_m_symbol('global-variable')]).apply(null, [__to_m_symbol('name')]);
exports.m_global_45variable_46name = m_global_45variable_46name;
var m_global_45variable_46path = m_field.apply(null, [__to_m_symbol('global-variable')]).apply(null, [__to_m_symbol('path')]);
exports.m_global_45variable_46path = m_global_45variable_46path;

var m_generate_45symbol_45expr_39 = function m_generate_45symbol_45expr_39(m_variable) {
  return m_global_45variable_63.apply(null, [m_variable]).apply(null, [function (m__95) {
    return m_global_45variable_45operation.apply(null, [m_global_45variable_46name.apply(null, [m_variable])]).apply(null, [m_global_45variable_46path.apply(null, [m_variable])]);
  }]).apply(null, [function (m__95) {
    return m_local_45variable_45operation.apply(null, [m_local_45variable_46name.apply(null, [m_variable])]).apply(null, [m_local_45variable_46index.apply(null, [m_variable])]);
  }]).apply(null, [m_nil]);
};

exports.m_generate_45symbol_45expr_39 = m_generate_45symbol_45expr_39;
var m_global_45variable_46macro_63 = m_field.apply(null, [__to_m_symbol('global-variable')]).apply(null, [__to_m_symbol('macro?')]);
exports.m_global_45variable_46macro_63 = m_global_45variable_46macro_63;
var m_tree_45map_45node_46left = m_field.apply(null, [__to_m_symbol('tree-map-node')]).apply(null, [__to_m_symbol('left')]);
exports.m_tree_45map_45node_46left = m_tree_45map_45node_46left;
var m_tree_45map_45node_46min_45node = m_fix.apply(null, [function (m_tree_45map_45node_46min_45node) {
  return function (m_node) {
    return m_tree_45map_45node_45nil_63.apply(null, [m_tree_45map_45node_46left.apply(null, [m_node])]).apply(null, [function (m__95) {
      return m_node;
    }]).apply(null, [function (m__95) {
      return m_tree_45map_45node_46min_45node.apply(null, [m_tree_45map_45node_46left.apply(null, [m_node])]);
    }]).apply(null, [m_nil]);
  };
}]);
exports.m_tree_45map_45node_46min_45node = m_tree_45map_45node_46min_45node;
var m_tree_45map_45node_46right = m_field.apply(null, [__to_m_symbol('tree-map-node')]).apply(null, [__to_m_symbol('right')]);
exports.m_tree_45map_45node_46right = m_tree_45map_45node_46right;
var m_tree_45map_45node_46key = m_field.apply(null, [__to_m_symbol('tree-map-node')]).apply(null, [__to_m_symbol('key')]);
exports.m_tree_45map_45node_46key = m_tree_45map_45node_46key;
var m_tree_45map_45node_46value = m_field.apply(null, [__to_m_symbol('tree-map-node')]).apply(null, [__to_m_symbol('value')]);
exports.m_tree_45map_45node_46value = m_tree_45map_45node_46value;
var m_tree_45map_45node_46get = m_fix.apply(null, [function (m_tree_45map_45node_46get) {
  return function (m_node) {
    return function (m_compare) {
      return function (m_key) {
        return m_tree_45map_45node_45nil_63.apply(null, [m_node]).apply(null, [function (m__95) {
          return m_null;
        }]).apply(null, [function (m__95) {
          return m_fold_45compare.apply(null, [m_compare.apply(null, [m_key]).apply(null, [m_tree_45map_45node_46key.apply(null, [m_node])])]).apply(null, [function (m__60) {
            return m_tree_45map_45node_46get.apply(null, [m_tree_45map_45node_46left.apply(null, [m_node])]).apply(null, [m_compare]).apply(null, [m_key]);
          }]).apply(null, [function (m__62) {
            return m_tree_45map_45node_46get.apply(null, [m_tree_45map_45node_46right.apply(null, [m_node])]).apply(null, [m_compare]).apply(null, [m_key]);
          }]).apply(null, [function (m__61) {
            return m_some.apply(null, [m_tree_45map_45node_46value.apply(null, [m_node])]);
          }]);
        }]).apply(null, [m_nil]);
      };
    };
  };
}]);
exports.m_tree_45map_45node_46get = m_tree_45map_45node_46get;
var m_tree_45map_45node_46remove = m_fix.apply(null, [function (m_tree_45map_45node_46remove) {
  return function (m_node) {
    return function (m_compare) {
      return function (m_key) {
        return m_tree_45map_45node_45nil_63.apply(null, [m_node]).apply(null, [function (m__95) {
          return m_node;
        }]).apply(null, [function (m__95) {
          return m_fold_45compare.apply(null, [m_compare.apply(null, [m_key]).apply(null, [m_tree_45map_45node_46key.apply(null, [m_node])])]).apply(null, [function (m__60) {
            return m_tree_45map_45node.apply(null, [m_tree_45map_45node_46remove.apply(null, [m_tree_45map_45node_46left.apply(null, [m_node])]).apply(null, [m_compare]).apply(null, [m_key])]).apply(null, [m_tree_45map_45node_46right.apply(null, [m_node])]).apply(null, [m_tree_45map_45node_46key.apply(null, [m_node])]).apply(null, [m_tree_45map_45node_46value.apply(null, [m_node])]);
          }]).apply(null, [function (m__62) {
            return m_tree_45map_45node.apply(null, [m_tree_45map_45node_46left.apply(null, [m_node])]).apply(null, [m_tree_45map_45node_46remove.apply(null, [m_tree_45map_45node_46right.apply(null, [m_node])]).apply(null, [m_compare]).apply(null, [m_key])]).apply(null, [m_tree_45map_45node_46key.apply(null, [m_node])]).apply(null, [m_tree_45map_45node_46value.apply(null, [m_node])]);
          }]).apply(null, [function (m__61) {
            return m_tree_45map_45node_45nil_63.apply(null, [m_tree_45map_45node_46left.apply(null, [m_node])]).apply(null, [function (m__95) {
              return m_tree_45map_45node_46right.apply(null, [m_node]);
            }]).apply(null, [function (m__95) {
              return m_tree_45map_45node_45nil_63.apply(null, [m_tree_45map_45node_46right.apply(null, [m_node])]).apply(null, [function (m__95) {
                return m_tree_45map_45node_46left.apply(null, [m_node]);
              }]).apply(null, [function (m__95) {
                return m_with.apply(null, [m_tree_45map_45node_46min_45node.apply(null, [m_tree_45map_45node_46right.apply(null, [m_node])])]).apply(null, [function (m_min) {
                  return m_tree_45map_45node.apply(null, [m_tree_45map_45node_46left.apply(null, [m_node])]).apply(null, [m_tree_45map_45node_46right.apply(null, [m_tree_45map_45node_46remove.apply(null, [m_tree_45map_45node_46right.apply(null, [m_node])]).apply(null, [m_compare]).apply(null, [m_key])])]).apply(null, [m_tree_45map_45node_46key.apply(null, [m_min])]).apply(null, [m_tree_45map_45node_46value.apply(null, [m_min])]);
                }]);
              }]).apply(null, [m_nil]);
            }]).apply(null, [m_nil]);
          }]);
        }]).apply(null, [m_nil]);
      };
    };
  };
}]);
exports.m_tree_45map_45node_46remove = m_tree_45map_45node_46remove;
var m_tree_45map_45node_46put = m_fix.apply(null, [function (m_tree_45map_45node_46put) {
  return function (m_node) {
    return function (m_compare) {
      return function (m_key) {
        return function (m_value) {
          return m_tree_45map_45node_45nil_63.apply(null, [m_node]).apply(null, [function (m__95) {
            return m_tree_45map_45node.apply(null, [m_tree_45map_45node_45nil]).apply(null, [m_tree_45map_45node_45nil]).apply(null, [m_key]).apply(null, [m_value]);
          }]).apply(null, [function (m__95) {
            return m_fold_45compare.apply(null, [m_compare.apply(null, [m_key]).apply(null, [m_tree_45map_45node_46key.apply(null, [m_node])])]).apply(null, [function (m__60) {
              return m_tree_45map_45node.apply(null, [m_tree_45map_45node_46put.apply(null, [m_tree_45map_45node_46left.apply(null, [m_node])]).apply(null, [m_compare]).apply(null, [m_key]).apply(null, [m_value])]).apply(null, [m_tree_45map_45node_46right.apply(null, [m_node])]).apply(null, [m_tree_45map_45node_46key.apply(null, [m_node])]).apply(null, [m_tree_45map_45node_46value.apply(null, [m_node])]);
            }]).apply(null, [function (m__62) {
              return m_tree_45map_45node.apply(null, [m_tree_45map_45node_46left.apply(null, [m_node])]).apply(null, [m_tree_45map_45node_46put.apply(null, [m_tree_45map_45node_46right.apply(null, [m_node])]).apply(null, [m_compare]).apply(null, [m_key]).apply(null, [m_value])]).apply(null, [m_tree_45map_45node_46key.apply(null, [m_node])]).apply(null, [m_tree_45map_45node_46value.apply(null, [m_node])]);
            }]).apply(null, [function (m__61) {
              return m_tree_45map_45node.apply(null, [m_tree_45map_45node_46left.apply(null, [m_node])]).apply(null, [m_tree_45map_45node_46right.apply(null, [m_node])]).apply(null, [m_key]).apply(null, [m_value]);
            }]);
          }]).apply(null, [m_nil]);
        };
      };
    };
  };
}]);
exports.m_tree_45map_45node_46put = m_tree_45map_45node_46put;
var m_tree_45map_45node_46fold = m_fix.apply(null, [function (m_tree_45map_45node_46fold) {
  return function (m_node) {
    return function (m_acc) {
      return function (m_f) {
        return m_tree_45map_45node_45nil_63.apply(null, [m_node]).apply(null, [function (m__95) {
          return m_acc;
        }]).apply(null, [function (m__95) {
          return m_tree_45map_45node_46fold.apply(null, [m_tree_45map_45node_46right.apply(null, [m_node])]).apply(null, [m_f.apply(null, [m_tree_45map_45node_46fold.apply(null, [m_tree_45map_45node_46left.apply(null, [m_node])]).apply(null, [m_acc]).apply(null, [m_f])]).apply(null, [m_tree_45map_45node_46key.apply(null, [m_node])]).apply(null, [m_tree_45map_45node_46value.apply(null, [m_node])])]).apply(null, [m_f]);
        }]).apply(null, [m_nil]);
      };
    };
  };
}]);
exports.m_tree_45map_45node_46fold = m_tree_45map_45node_46fold;
var m_tree_45map_46node = m_field.apply(null, [__to_m_symbol('tree-map')]).apply(null, [__to_m_symbol('node')]);
exports.m_tree_45map_46node = m_tree_45map_46node;

var m_tree_45map_46fold = function m_tree_45map_46fold(m_map) {
  return function (m_acc) {
    return function (m_f) {
      return m_tree_45map_45node_46fold.apply(null, [m_tree_45map_46node.apply(null, [m_map])]).apply(null, [m_acc]).apply(null, [m_f]);
    };
  };
};

exports.m_tree_45map_46fold = m_tree_45map_46fold;

var m_tree_45map_45_62list = function m_tree_45map_45_62list(m_map) {
  return m_tree_45map_46fold.apply(null, [m_map]).apply(null, [m_nil]).apply(null, [function (m_list) {
    return function (m_key) {
      return function (m_value) {
        return m_cons.apply(null, [m_pair.apply(null, [m_key]).apply(null, [m_value])]).apply(null, [m_list]);
      };
    };
  }]);
};

exports.m_tree_45map_45_62list = m_tree_45map_45_62list;
var m_tree_45map_46compare = m_field.apply(null, [__to_m_symbol('tree-map')]).apply(null, [__to_m_symbol('compare')]);
exports.m_tree_45map_46compare = m_tree_45map_46compare;

var m_tree_45map_46get = function m_tree_45map_46get(m_map) {
  return function (m_key) {
    return m_tree_45map_45node_46get.apply(null, [m_tree_45map_46node.apply(null, [m_map])]).apply(null, [m_tree_45map_46compare.apply(null, [m_map])]).apply(null, [m_key]);
  };
};

exports.m_tree_45map_46get = m_tree_45map_46get;

var m_env_46get = function m_env_46get(m_local_45env) {
  return function (m_global_45env) {
    return function (m_name) {
      return m_with.apply(null, [m_tree_45map_46get.apply(null, [m_local_45env_46locals.apply(null, [m_local_45env])]).apply(null, [m_name])]).apply(null, [function (m_option) {
        return m_some_63.apply(null, [m_option]).apply(null, [function (m__95) {
          return m_option;
        }]).apply(null, [function (m__95) {
          return m_tree_45map_46get.apply(null, [m_global_45env_46globals.apply(null, [m_global_45env])]).apply(null, [m_name]);
        }]).apply(null, [m_nil]);
      }]);
    };
  };
};

exports.m_env_46get = m_env_46get;
var m_generate_45symbol_45expr = m_fix.apply(null, [function (m_generate_45symbol_45expr) {
  return function (m_name) {
    return function (m_local_45env) {
      return function (m_global_45env) {
        return m_with.apply(null, [m_env_46get.apply(null, [m_local_45env]).apply(null, [m_global_45env]).apply(null, [m_name])]).apply(null, [function (m_option) {
          return m_some_63.apply(null, [m_option]).apply(null, [function (m__95) {
            return m_generated.apply(null, [m_generate_45symbol_45expr_39.apply(null, [m_unnull.apply(null, [m_option])])]).apply(null, [m_nil]).apply(null, [m_global_45env]);
          }]).apply(null, [function (m__95) {
            return m_generating.apply(null, [m_cons.apply(null, [m_name]).apply(null, [m_nil])]).apply(null, [m_global_45env]).apply(null, [function (m_global_45env) {
              return m_generate_45symbol_45expr.apply(null, [m_name]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
            }]);
          }]).apply(null, [m_nil]);
        }]);
      };
    };
  };
}]);
exports.m_generate_45symbol_45expr = m_generate_45symbol_45expr;

var m_global_45env_45_62env = function m_global_45env_45_62env(m_global_45env) {
  return function (m_name) {
    return m_pair.apply(null, [m_pair.apply(null, [m_global_45env_46heap.apply(null, [m_global_45env]).apply(null, [m_name])]).apply(null, [m_null])]).apply(null, [m_tree_45map_46get.apply(null, [m_global_45env_46globals.apply(null, [m_global_45env])]).apply(null, [m_name]).apply(null, [m_const.apply(null, [m_null])]).apply(null, [m_global_45variable_46macro_63])]);
  };
};

exports.m_global_45env_45_62env = m_global_45env_45_62env;

var m_global_45env_46unresolved = function m_global_45env_46unresolved(m_global_45env) {
  return m_filter.apply(null, [m_map.apply(null, [m_tree_45map_45_62list.apply(null, [m_global_45env_46dependents.apply(null, [m_global_45env])])]).apply(null, [m_first])]).apply(null, [function (m_dependent) {
    return m_null_63.apply(null, [m_tree_45map_46get.apply(null, [m_global_45env_46globals.apply(null, [m_global_45env])]).apply(null, [m_dependent])]);
  }]);
};

exports.m_global_45env_46unresolved = m_global_45env_46unresolved;

var m_tree_45map_46remove = function m_tree_45map_46remove(m_map) {
  return function (m_key) {
    return m_tree_45map.apply(null, [m_tree_45map_45node_46remove.apply(null, [m_tree_45map_46node.apply(null, [m_map])]).apply(null, [m_tree_45map_46compare.apply(null, [m_map])]).apply(null, [m_key])]).apply(null, [m_tree_45map_46compare.apply(null, [m_map])]);
  };
};

exports.m_tree_45map_46remove = m_tree_45map_46remove;

var m_tree_45map_46put = function m_tree_45map_46put(m_map) {
  return function (m_key) {
    return function (m_value) {
      return m_tree_45map.apply(null, [m_tree_45map_45node_46put.apply(null, [m_tree_45map_46node.apply(null, [m_map])]).apply(null, [m_tree_45map_46compare.apply(null, [m_map])]).apply(null, [m_key]).apply(null, [m_value])]).apply(null, [m_tree_45map_46compare.apply(null, [m_map])]);
    };
  };
};

exports.m_tree_45map_46put = m_tree_45map_46put;

var m_file_45_62tree_45map_39 = function m_file_45_62tree_45map_39(m_path) {
  return function (m__33tree_45map) {
    return function (m_file) {
      return m_then_45run_45with.apply(null, [m_file_46directory_63.apply(null, [m_file])]).apply(null, [function (m_directory_63) {
        return m_directory_63.apply(null, [function (m__95) {
          return m_then_45run_45with.apply(null, [m_file_46child_45files.apply(null, [m_file])]).apply(null, [function (m_child_45files) {
            return m_fold.apply(null, [m_child_45files]).apply(null, [m__33tree_45map]).apply(null, [m_file_45_62tree_45map_39.apply(null, [m_append.apply(null, [m_path]).apply(null, [m_file_46name.apply(null, [m_file])])])]);
          }]);
        }]).apply(null, [function (m__95) {
          return m_then_45run_45with.apply(null, [m__33tree_45map]).apply(null, [function (m_tree_45map) {
            return m_impure.apply(null, [m_tree_45map_46put.apply(null, [m_tree_45map]).apply(null, [m_append.apply(null, [m_path]).apply(null, [m_file_46name.apply(null, [m_file])])]).apply(null, [m_file])]);
          }]);
        }]).apply(null, [m_nil]);
      }]);
    };
  };
};

exports.m_file_45_62tree_45map_39 = m_file_45_62tree_45map_39;

var m_file_45_62tree_45map = function m_file_45_62tree_45map(m_file) {
  return m_file_45_62tree_45map_39.apply(null, [m_nil]).apply(null, [m_impure.apply(null, [m_empty_45tree_45map.apply(null, [m_compare_45list.apply(null, [m_compare_45symbol])])])]).apply(null, [m_file]);
};

exports.m_file_45_62tree_45map = m_file_45_62tree_45map;

var m_parse_45file = function m_parse_45file(m_file) {
  return m_then_45run_45with.apply(null, [m_file_45_62tree_45map.apply(null, [m_file])]).apply(null, [function (m_tree_45map) {
    return m_then_45run_45with.apply(null, [m_file_46directory_63.apply(null, [m_file])]).apply(null, [function (m_directory_63) {
      return m_tree_45map_46fold.apply(null, [m_tree_45map]).apply(null, [m_impure.apply(null, [m_nil])]).apply(null, [function (m__33acc) {
        return function (m_path) {
          return function (m_file) {
            return m_then_45run_45with.apply(null, [m_file_46read.apply(null, [m_file])]).apply(null, [function (m_chars) {
              return m_then_45run_45with.apply(null, [m__33acc]).apply(null, [function (m_acc) {
                return m_impure.apply(null, [m_concat.apply(null, [m_acc]).apply(null, [m_parse.apply(null, [m_init.apply(null, [m_init.apply(null, [m_cdr.apply(null, [m_flat_45map.apply(null, [m_directory_63.apply(null, [function (m__95) {
                  return m_cdr.apply(null, [m_path]);
                }]).apply(null, [function (m__95) {
                  return m_path;
                }]).apply(null, [m_nil])]).apply(null, [m_cons.apply(null, [m_slash])])])])])]).apply(null, [m_chars]).apply(null, [m_position.apply(null, [m_nat_46_49]).apply(null, [m_nat_46_49])])])]);
              }]);
            }]);
          };
        };
      }]);
    }]);
  }]);
};

exports.m_parse_45file = m_parse_45file;

var m_generate_45fn_45expr_45closures = function m_generate_45fn_45expr_45closures(m_closures) {
  return function (m_name) {
    return function (m_local_45env) {
      return m_second.apply(null, [m_fold.apply(null, [m_append.apply(null, [m_closures]).apply(null, [m_name])]).apply(null, [m_pair.apply(null, [m_nat_46_48]).apply(null, [m_local_45env_46locals.apply(null, [m_local_45env])])]).apply(null, [function (m_vars) {
        return function (m_closure) {
          return m_pair.apply(null, [m_nat_46_43.apply(null, [m_nat_46_49]).apply(null, [m_first.apply(null, [m_vars])])]).apply(null, [m_tree_45map_46put.apply(null, [m_second.apply(null, [m_vars])]).apply(null, [m_closure]).apply(null, [m_local_45variable.apply(null, [m_closure]).apply(null, [m_first.apply(null, [m_vars])])])]);
        };
      }])]);
    };
  };
};

exports.m_generate_45fn_45expr_45closures = m_generate_45fn_45expr_45closures;

var m_generating_45_62generated = function m_generating_45_62generated(m_generating_39) {
  return function (m_operation) {
    return function (m_global_45env) {
      return function (m_continue) {
        return m_generated.apply(null, [m_operation]).apply(null, [m_nil]).apply(null, [m_swap.apply(null, [m_global_45env_46with_45dependents]).apply(null, [m_global_45env]).apply(null, [m_with.apply(null, [m_global_45env_46dependents.apply(null, [m_generating_46global_45env.apply(null, [m_generating_39])])]).apply(null, [function (m_dependents) {
          return m_with.apply(null, [m_car.apply(null, [m_generating_46dependencies.apply(null, [m_generating_39])])]).apply(null, [function (m_dependency) {
            return m_tree_45map_46put.apply(null, [m_dependents]).apply(null, [m_dependency]).apply(null, [function (m_global_45env) {
              return m_null_63.apply(null, [m_tree_45map_46get.apply(null, [m_dependents]).apply(null, [m_dependency])]).apply(null, [function (m__95) {
                return m_continue.apply(null, [m_global_45env]);
              }]).apply(null, [function (m__95) {
                return m_with.apply(null, [m_unnull.apply(null, [m_tree_45map_46get.apply(null, [m_dependents]).apply(null, [m_dependency])]).apply(null, [m_global_45env])]).apply(null, [function (m_result_49) {
                  return m_with.apply(null, [m_continue.apply(null, [m_generate_45result_46global_45env.apply(null, [m_result_49])])]).apply(null, [function (m_result_50) {
                    return m_generate_45result_46combine.apply(null, [m_result_49]).apply(null, [m_result_50]).apply(null, [m_generate_45result_46global_45env.apply(null, [m_result_50])]).apply(null, [m_false]);
                  }]);
                }]);
              }]).apply(null, [m_nil]);
            }]);
          }]);
        }])])]);
      };
    };
  };
};

exports.m_generating_45_62generated = m_generating_45_62generated;

var m_tree_45map_46_43 = function m_tree_45map_46_43(m_a) {
  return function (m_b) {
    return m_tree_45map_46fold.apply(null, [m_a]).apply(null, [m_b]).apply(null, [function (m_map) {
      return function (m_key) {
        return function (m_value) {
          return m_tree_45map_46put.apply(null, [m_map]).apply(null, [m_key]).apply(null, [m_value]);
        };
      };
    }]);
  };
};

exports.m_tree_45map_46_43 = m_tree_45map_46_43;
var m_closures_39 = m_fix.apply(null, [function (m_closures_39) {
  return function (m_local_45env) {
    return function (m_acc) {
      return function (m_expr) {
        return m_symbol_45expr_63.apply(null, [m_expr]).apply(null, [function (m__95) {
          return m_null_63.apply(null, [m_tree_45map_46get.apply(null, [m_local_45env_46locals.apply(null, [m_local_45env])]).apply(null, [m_symbol_45expr_46name.apply(null, [m_expr])])]).apply(null, [function (m__95) {
            return m_acc;
          }]).apply(null, [function (m__95) {
            return m_tree_45map_46put.apply(null, [m_acc]).apply(null, [m_symbol_45expr_46name.apply(null, [m_expr])]).apply(null, [m_true]);
          }]).apply(null, [m_nil]);
        }]).apply(null, [function (m__95) {
          return m_fold.apply(null, [m_list_45expr_46exprs.apply(null, [m_expr])]).apply(null, [m_acc]).apply(null, [m_closures_39.apply(null, [m_local_45env])]);
        }]).apply(null, [m_nil]);
      };
    };
  };
}]);
exports.m_closures_39 = m_closures_39;

var m_closures = function m_closures(m_local_45env) {
  return m_closures_39.apply(null, [m_local_45env]).apply(null, [m_empty_45tree_45map.apply(null, [m_compare_45symbol])]);
};

exports.m_closures = m_closures;

var m_heap_46get = function m_heap_46get(m_heap) {
  return function (m_name) {
    return m_with.apply(null, [m_heap.apply(null, [m_name])]).apply(null, [function (m_value) {
      return m_null_63.apply(null, [m_value]).apply(null, [function (m__95) {
        return m_error.apply(null, [m_concat.apply(null, [m_symbol_45_62list.apply(null, [__to_m_symbol('Could not find ')])]).apply(null, [m_name])]);
      }]).apply(null, [function (m__95) {
        return m_unnull.apply(null, [m_value]).apply(null, [m_heap]);
      }]).apply(null, [m_nil]);
    }]);
  };
};

exports.m_heap_46get = m_heap_46get;

var m_interpret_45global_45variable_45operation = function m_interpret_45global_45variable_45operation(m_interpret_45operation_39) {
  return function (m_operation) {
    return function (m_stack) {
      return function (m_heap) {
        return m_heap_46get.apply(null, [m_heap]).apply(null, [m_global_45variable_45operation_46name.apply(null, [m_operation])]);
      };
    };
  };
};

exports.m_interpret_45global_45variable_45operation = m_interpret_45global_45variable_45operation;

var m_interpret_45def_45operation = function m_interpret_45def_45operation(m_interpret_45operation_39) {
  return function (m_operation) {
    return function (m_stack) {
      return function (m_heap) {
        return m_heap_46get.apply(null, [m_heap]).apply(null, [m_def_45operation_46name.apply(null, [m_operation])]);
      };
    };
  };
};

exports.m_interpret_45def_45operation = m_interpret_45def_45operation;

var m_interpret_45fn_45operation = function m_interpret_45fn_45operation(m_interpret_45operation_39) {
  return function (m_operation) {
    return function (m_stack) {
      return function (m_heap) {
        return function (m_arg) {
          return m_heap_46get.apply(null, [m_heap]).apply(null, [m_fn_45operation_46name.apply(null, [m_operation])]).apply(null, [m_concat.apply(null, [m_map.apply(null, [m_fn_45operation_46closures.apply(null, [m_operation])]).apply(null, [function (m_closure) {
            return m_interpret_45operation_39.apply(null, [m_closure]).apply(null, [m_stack]).apply(null, [m_heap]);
          }])]).apply(null, [m_cons.apply(null, [m_arg]).apply(null, [m_stack])])]);
        };
      };
    };
  };
};

exports.m_interpret_45fn_45operation = m_interpret_45fn_45operation;
var m_interpret_45operation_39 = m_fix.apply(null, [function (m_interpret_45operation_39) {
  return function (m_operation) {
    return function (m_stack) {
      return function (m_heap) {
        return m_with.apply(null, [m_type_45name.apply(null, [m_operation])]).apply(null, [function (m_type) {
          return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('local-variable-operation')]).apply(null, [function (m__95) {
            return m_interpret_45local_45variable_45operation;
          }]).apply(null, [function (m__95) {
            return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('global-variable-operation')]).apply(null, [function (m__95) {
              return m_interpret_45global_45variable_45operation;
            }]).apply(null, [function (m__95) {
              return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('if-operation')]).apply(null, [function (m__95) {
                return m_interpret_45if_45operation;
              }]).apply(null, [function (m__95) {
                return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('def-operation')]).apply(null, [function (m__95) {
                  return m_interpret_45def_45operation;
                }]).apply(null, [function (m__95) {
                  return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('fn-operation')]).apply(null, [function (m__95) {
                    return m_interpret_45fn_45operation;
                  }]).apply(null, [function (m__95) {
                    return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('symbol-operation')]).apply(null, [function (m__95) {
                      return m_interpret_45symbol_45operation;
                    }]).apply(null, [function (m__95) {
                      return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('apply-operation')]).apply(null, [function (m__95) {
                        return m_interpret_45apply_45operation;
                      }]).apply(null, [function (m__95) {
                        return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('line-number-operation')]).apply(null, [function (m__95) {
                          return m_interpret_45line_45number_45operation;
                        }]).apply(null, [function (m__95) {
                          return m_error.apply(null, [__to_m_symbol('...')]);
                        }]).apply(null, [m_nil]);
                      }]).apply(null, [m_nil]);
                    }]).apply(null, [m_nil]);
                  }]).apply(null, [m_nil]);
                }]).apply(null, [m_nil]);
              }]).apply(null, [m_nil]);
            }]).apply(null, [m_nil]);
          }]).apply(null, [m_nil]);
        }]).apply(null, [m_interpret_45operation_39]).apply(null, [m_operation]).apply(null, [m_stack]).apply(null, [m_heap]);
      };
    };
  };
}]);
exports.m_interpret_45operation_39 = m_interpret_45operation_39;

var m_interpret_45operation = function m_interpret_45operation(m_operation) {
  return function (m_heap) {
    return m_interpret_45operation_39.apply(null, [m_operation]).apply(null, [m_nil]).apply(null, [m_heap]);
  };
};

exports.m_interpret_45operation = m_interpret_45operation;

var m_repl_45interpret_45operation = function m_repl_45interpret_45operation(m_result) {
  return function (m_heap) {
    return m_interpret_45operation.apply(null, [m_generated_46operation.apply(null, [m_result])]).apply(null, [m_heap]);
  };
};

exports.m_repl_45interpret_45operation = m_repl_45interpret_45operation;

var m_interpret_45def_45declaration = function m_interpret_45def_45declaration(m_declaration) {
  return function (m_heap) {
    return function (m_name) {
      return m_symbol_46_61.apply(null, [m_name]).apply(null, [m_def_45declaration_46name.apply(null, [m_declaration])]).apply(null, [function (m__95) {
        return m_some.apply(null, [function (m_heap_39) {
          return m_interpret_45operation.apply(null, [m_def_45declaration_46value.apply(null, [m_declaration])]).apply(null, [m_heap_39]);
        }]);
      }]).apply(null, [function (m__95) {
        return m_heap.apply(null, [m_name]);
      }]).apply(null, [m_nil]);
    };
  };
};

exports.m_interpret_45def_45declaration = m_interpret_45def_45declaration;

var m_generate_45global_45expr_39 = function m_generate_45global_45expr_39(m_name) {
  return function (m_value) {
    return function (m_declaration) {
      return function (m_generated_39) {
        return m_generated.apply(null, [m_def_45operation.apply(null, [m_name]).apply(null, [m_expr_46path.apply(null, [m_value])]).apply(null, [m_generated_46operation.apply(null, [m_generated_39])])]).apply(null, [m_append.apply(null, [m_generated_46declarations.apply(null, [m_generated_39])]).apply(null, [m_declaration])]).apply(null, [m_swap.apply(null, [m_global_45env_46with_45heap]).apply(null, [m_generated_46global_45env.apply(null, [m_generated_39])]).apply(null, [m_interpret_45def_45declaration.apply(null, [m_declaration]).apply(null, [m_global_45env_46heap.apply(null, [m_generated_46global_45env.apply(null, [m_generated_39])])])])]);
      };
    };
  };
};

exports.m_generate_45global_45expr_39 = m_generate_45global_45expr_39;
var m_generate_45global_45expr = m_fix.apply(null, [function (m_generate_45global_45expr) {
  return function (m_macro_63) {
    return function (m_generate_45expr) {
      return function (m_name) {
        return function (m_value) {
          return function (m_local_45env) {
            return function (m_global_45env) {
              return m_some_63.apply(null, [m_tree_45map_46get.apply(null, [m_global_45env_46globals.apply(null, [m_global_45env])]).apply(null, [m_name])]).apply(null, [function (m__95) {
                return m_degenerate.apply(null, [m_cons.apply(null, [m_concat.apply(null, [m_name]).apply(null, [__to_m_symbol(' has already been defined')])]).apply(null, [m_nil])]).apply(null, [m_global_45env]);
              }]).apply(null, [function (m__95) {
                return m_with.apply(null, [m_swap.apply(null, [m_global_45env_46with_45globals]).apply(null, [m_global_45env]).apply(null, [m_tree_45map_46put.apply(null, [m_global_45env_46globals.apply(null, [m_global_45env])]).apply(null, [m_name]).apply(null, [m_global_45variable.apply(null, [m_name]).apply(null, [m_expr_46path.apply(null, [m_value])]).apply(null, [m_macro_63])])])]).apply(null, [function (m_new_45global_45env) {
                  return m_generate_45result_46match.apply(null, [m_generate_45expr.apply(null, [m_value]).apply(null, [m_local_45env_46with_45def.apply(null, [m_name]).apply(null, [m_local_45env])]).apply(null, [m_new_45global_45env])]).apply(null, [function (m_degenerate_39) {
                    return m_degenerate_39;
                  }]).apply(null, [function (m_generating_39) {
                    return m_generating_45_62generated.apply(null, [m_generating_39]).apply(null, [m_def_45operation.apply(null, [m_name]).apply(null, [m_expr_46path.apply(null, [m_value])]).apply(null, [m_nil_45operation])]).apply(null, [m_global_45env]).apply(null, [function (m_global_45env) {
                      return m_generate_45global_45expr.apply(null, [m_macro_63]).apply(null, [m_generate_45expr]).apply(null, [m_name]).apply(null, [m_value]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
                    }]);
                  }]).apply(null, [function (m_generated_39) {
                    return m_with.apply(null, [m_def_45declaration.apply(null, [m_name]).apply(null, [m_expr_46path.apply(null, [m_value])]).apply(null, [m_generated_46operation.apply(null, [m_generated_39])])]).apply(null, [function (m_declaration) {
                      return m_with.apply(null, [m_tree_45map_46get.apply(null, [m_global_45env_46dependents.apply(null, [m_generated_46global_45env.apply(null, [m_generated_39])])]).apply(null, [m_name])]).apply(null, [function (m_generating_63) {
                        return m_with.apply(null, [m_generate_45global_45expr_39.apply(null, [m_name]).apply(null, [m_value]).apply(null, [m_declaration]).apply(null, [m_generated_39])]).apply(null, [function (m_result_49) {
                          return m_with.apply(null, [m_unnull.apply(null, [m_generating_63]).apply(null, [m_generated_46global_45env.apply(null, [m_result_49])])]).apply(null, [function (m_result_50) {
                            return m_null_63.apply(null, [m_generating_63]).apply(null, [function (m__95) {
                              return m_result_49;
                            }]).apply(null, [function (m__95) {
                              return m_generated_46combine.apply(null, [m_result_49]).apply(null, [m_result_50]).apply(null, [m_generate_45result_46global_45env.apply(null, [m_result_50])]).apply(null, [m_true]);
                            }]).apply(null, [m_nil]);
                          }]);
                        }]);
                      }]);
                    }]);
                  }]);
                }]);
              }]).apply(null, [m_nil]);
            };
          };
        };
      };
    };
  };
}]);
exports.m_generate_45global_45expr = m_generate_45global_45expr;
var m_generate_45def_45expr = m_generate_45global_45expr.apply(null, [m_false]);
exports.m_generate_45def_45expr = m_generate_45def_45expr;
var m_generate_45macro_45expr = m_generate_45global_45expr.apply(null, [m_true]);
exports.m_generate_45macro_45expr = m_generate_45macro_45expr;

var m_interpret_45fn_45declaration = function m_interpret_45fn_45declaration(m_declaration) {
  return function (m_heap) {
    return function (m_name) {
      return m_symbol_46_61.apply(null, [m_name]).apply(null, [m_fn_45declaration_46name.apply(null, [m_declaration])]).apply(null, [function (m__95) {
        return m_some.apply(null, [function (m_heap_39) {
          return function (m_stack) {
            return m_interpret_45operation_39.apply(null, [m_fn_45declaration_46value.apply(null, [m_declaration])]).apply(null, [m_stack]).apply(null, [m_heap_39]);
          };
        }]);
      }]).apply(null, [function (m__95) {
        return m_heap.apply(null, [m_name]);
      }]).apply(null, [m_nil]);
    };
  };
};

exports.m_interpret_45fn_45declaration = m_interpret_45fn_45declaration;
var m_generate_45fn_45expr_39 = m_fix.apply(null, [function (m_generate_45fn_45expr_39) {
  return function (m_generate_45expr) {
    return function (m_name) {
      return function (m_value) {
        return function (m_local_45env) {
          return function (m_global_45env) {
            return m_with.apply(null, [m_mangle_45fn_45name.apply(null, [m_local_45env_46def.apply(null, [m_local_45env])]).apply(null, [m_global_45env_46index.apply(null, [m_global_45env])])]).apply(null, [function (m_mangled_45name) {
              return m_with.apply(null, [m_global_45env_46with_45index.apply(null, [m_nat_46_43.apply(null, [m_nat_46_49]).apply(null, [m_global_45env_46index.apply(null, [m_global_45env])])]).apply(null, [m_global_45env])]).apply(null, [function (m_new_45global_45env) {
                return m_with.apply(null, [m_map.apply(null, [m_tree_45map_45_62list.apply(null, [m_closures.apply(null, [m_local_45env]).apply(null, [m_value])])]).apply(null, [m_first])]).apply(null, [function (m_closures) {
                  return m_generate_45result_46match.apply(null, [m_generate_45expr.apply(null, [m_value]).apply(null, [m_local_45env_46with_45locals.apply(null, [m_generate_45fn_45expr_45closures.apply(null, [m_closures]).apply(null, [m_name]).apply(null, [m_local_45env])]).apply(null, [m_local_45env_46with_45def.apply(null, [m_mangled_45name]).apply(null, [m_local_45env])])]).apply(null, [m_new_45global_45env])]).apply(null, [function (m_degenerate_39) {
                    return m_degenerate_39;
                  }]).apply(null, [function (m_generating_39) {
                    return m_generating.apply(null, [m_generating_46dependencies.apply(null, [m_generating_39])]).apply(null, [m_generating_46global_45env.apply(null, [m_generating_39])]).apply(null, [function (m_global_45env) {
                      return m_generate_45fn_45expr_39.apply(null, [m_name]).apply(null, [m_value]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
                    }]);
                  }]).apply(null, [function (m_generated_39) {
                    return m_with.apply(null, [m_fn_45declaration.apply(null, [m_mangled_45name]).apply(null, [m_expr_46path.apply(null, [m_value])]).apply(null, [m_closures]).apply(null, [m_generated_46operation.apply(null, [m_generated_39])])]).apply(null, [function (m_declaration) {
                      return m_generated.apply(null, [m_fn_45operation.apply(null, [m_expr_46path.apply(null, [m_value])]).apply(null, [m_mangled_45name]).apply(null, [m_name]).apply(null, [m_generated_46operation.apply(null, [m_generated_39])]).apply(null, [m_map.apply(null, [m_closures]).apply(null, [function (m_closure) {
                        return m_generate_45symbol_45expr_39.apply(null, [m_unnull.apply(null, [m_env_46get.apply(null, [m_local_45env]).apply(null, [m_generated_46global_45env.apply(null, [m_generated_39])]).apply(null, [m_closure])])]);
                      }])])]).apply(null, [m_append.apply(null, [m_generated_46declarations.apply(null, [m_generated_39])]).apply(null, [m_declaration])]).apply(null, [m_swap.apply(null, [m_global_45env_46with_45heap]).apply(null, [m_generated_46global_45env.apply(null, [m_generated_39])]).apply(null, [m_interpret_45fn_45declaration.apply(null, [m_declaration]).apply(null, [m_global_45env_46heap.apply(null, [m_generated_46global_45env.apply(null, [m_generated_39])])])])]);
                    }]);
                  }]);
                }]);
              }]);
            }]);
          };
        };
      };
    };
  };
}]);
exports.m_generate_45fn_45expr_39 = m_generate_45fn_45expr_39;
var m_generate_45fn_45expr = m_fix.apply(null, [function (m_generate_45fn_45expr) {
  return function (m_generate_45expr) {
    return function (m_names) {
      return function (m_value) {
        return function (m_local_45env) {
          return function (m_global_45env) {
            return m_nil_63.apply(null, [m_cdr.apply(null, [m_names])]).apply(null, [function (m__95) {
              return m_generate_45fn_45expr_39.apply(null, [m_generate_45expr]).apply(null, [m_car.apply(null, [m_names])]).apply(null, [m_value]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
            }]).apply(null, [function (m__95) {
              return m_with.apply(null, [m_list_45expr.apply(null, [m_cons.apply(null, [m_symbol_45expr.apply(null, [__to_m_symbol('fn')]).apply(null, [m_expr_46path.apply(null, [m_value])]).apply(null, [m_expr_46start.apply(null, [m_value])]).apply(null, [m_expr_46end.apply(null, [m_value])])]).apply(null, [m_cons.apply(null, [m_symbol_45expr.apply(null, [m_last.apply(null, [m_names])]).apply(null, [m_expr_46path.apply(null, [m_value])]).apply(null, [m_expr_46start.apply(null, [m_value])]).apply(null, [m_expr_46end.apply(null, [m_value])])]).apply(null, [m_cons.apply(null, [m_value]).apply(null, [m_nil])])])]).apply(null, [m_expr_46path.apply(null, [m_value])]).apply(null, [m_expr_46start.apply(null, [m_value])]).apply(null, [m_expr_46end.apply(null, [m_value])])]).apply(null, [function (m_new_45value) {
                return m_generate_45fn_45expr.apply(null, [m_generate_45expr]).apply(null, [m_init.apply(null, [m_names])]).apply(null, [m_new_45value]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
              }]);
            }]).apply(null, [m_nil]);
          };
        };
      };
    };
  };
}]);
exports.m_generate_45fn_45expr = m_generate_45fn_45expr;

var m_interpret_45declaration = function m_interpret_45declaration(m_declaration) {
  return function (m_heap) {
    return m_with.apply(null, [m_type_45name.apply(null, [m_declaration])]).apply(null, [function (m_type) {
      return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('def-declaration')]).apply(null, [function (m__95) {
        return m_interpret_45def_45declaration;
      }]).apply(null, [function (m__95) {
        return m_symbol_46_61.apply(null, [m_type]).apply(null, [__to_m_symbol('fn-declaration')]).apply(null, [function (m__95) {
          return m_interpret_45fn_45declaration;
        }]).apply(null, [function (m__95) {
          return m_error.apply(null, [__to_m_symbol('...')]);
        }]).apply(null, [m_nil]);
      }]).apply(null, [m_nil]);
    }]).apply(null, [m_declaration]).apply(null, [m_heap]);
  };
};

exports.m_interpret_45declaration = m_interpret_45declaration;

var m_interpret_45declarations = function m_interpret_45declarations(m_declarations) {
  return function (m_heap) {
    return m_fold.apply(null, [m_declarations]).apply(null, [m_heap]).apply(null, [function (m_heap_39) {
      return function (m_declaration) {
        return m_interpret_45declaration.apply(null, [m_declaration]).apply(null, [m_heap_39]);
      };
    }]);
  };
};

exports.m_interpret_45declarations = m_interpret_45declarations;

var m_repl_45interpret_45declarations = function m_repl_45interpret_45declarations(m_result) {
  return function (m_heap) {
    return m_interpret_45declarations.apply(null, [m_generated_46declarations.apply(null, [m_result])]).apply(null, [m_heap]);
  };
};

exports.m_repl_45interpret_45declarations = m_repl_45interpret_45declarations;
var m_generate_45macro_45apply_45expr = m_fix.apply(null, [function (m_generate_45macro_45apply_45expr) {
  return function (m_generate_45expr) {
    return function (m_expr) {
      return function (m_name) {
        return function (m_args) {
          return function (m_local_45env) {
            return function (m_global_45env) {
              return m_with.apply(null, [m_heap_46get.apply(null, [m_global_45env_46heap.apply(null, [m_global_45env])]).apply(null, [m_name])]).apply(null, [function (m_function) {
                return m_with.apply(null, [m_global_45env_45_62env.apply(null, [m_global_45env])]).apply(null, [function (m_env) {
                  return m_with.apply(null, [m_function.apply(null, [m_env]).apply(null, [m_args])]).apply(null, [function (m_result) {
                    return m_result_47match.apply(null, [m_result]).apply(null, [function (m_new_45expr) {
                      return m_generate_45expr.apply(null, [m_expr_46with_45path.apply(null, [m_expr_46path.apply(null, [m_expr])]).apply(null, [m_new_45expr])]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
                    }]).apply(null, [function (m_errors) {
                      return m_degenerate.apply(null, [m_errors]).apply(null, [m_global_45env]);
                    }]).apply(null, [function (m_dependencies) {
                      return m_generating.apply(null, [m_dependencies]).apply(null, [m_global_45env]).apply(null, [function (m_global_45env) {
                        return m_generate_45macro_45apply_45expr.apply(null, [m_generate_45expr]).apply(null, [m_expr]).apply(null, [m_name]).apply(null, [m_args]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
                      }]);
                    }]);
                  }]);
                }]);
              }]);
            };
          };
        };
      };
    };
  };
}]);
exports.m_generate_45macro_45apply_45expr = m_generate_45macro_45apply_45expr;
var m_generate_45macro_63_45expr = m_fix.apply(null, [function (m_generate_45macro_63_45expr) {
  return function (m_generate_45expr) {
    return function (m_expr) {
      return function (m_fn) {
        return function (m_args) {
          return function (m_local_45env) {
            return function (m_global_45env) {
              return m_with.apply(null, [m_symbol_45expr_46name.apply(null, [m_fn])]).apply(null, [function (m_name) {
                return m_with.apply(null, [m_env_46get.apply(null, [m_local_45env]).apply(null, [m_global_45env]).apply(null, [m_name])]).apply(null, [function (m_option) {
                  return m_null_63.apply(null, [m_option]).apply(null, [function (m__95) {
                    return m_generating.apply(null, [m_cons.apply(null, [m_name]).apply(null, [m_nil])]).apply(null, [m_global_45env]).apply(null, [function (m_global_45env) {
                      return m_generate_45macro_63_45expr.apply(null, [m_expr]).apply(null, [m_fn]).apply(null, [m_args]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
                    }]);
                  }]).apply(null, [function (m__95) {
                    return m_with.apply(null, [m_unnull.apply(null, [m_option])]).apply(null, [function (m_variable) {
                      return m_and.apply(null, [m_global_45variable_63.apply(null, [m_variable])]).apply(null, [function (m__95) {
                        return m_global_45variable_46macro_63.apply(null, [m_variable]);
                      }]).apply(null, [function (m__95) {
                        return m_generate_45macro_45apply_45expr.apply(null, [m_generate_45expr]).apply(null, [m_expr]).apply(null, [m_name]).apply(null, [m_args]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
                      }]).apply(null, [function (m__95) {
                        return m_generate_45apply_45expr.apply(null, [m_generate_45expr]).apply(null, [m_fn]).apply(null, [m_args]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
                      }]).apply(null, [m_nil]);
                    }]);
                  }]).apply(null, [m_nil]);
                }]);
              }]);
            };
          };
        };
      };
    };
  };
}]);
exports.m_generate_45macro_63_45expr = m_generate_45macro_63_45expr;

var m_generate_45list_45expr = function m_generate_45list_45expr(m_generate_45expr) {
  return function (m_expr) {
    return function (m_local_45env) {
      return function (m_global_45env) {
        return m_with.apply(null, [m_list_45expr_46exprs.apply(null, [m_expr])]).apply(null, [function (m_exprs) {
          return m_nil_63.apply(null, [m_exprs]).apply(null, [function (m__95) {
            return m_degenerate.apply(null, [m_cons.apply(null, [__to_m_symbol('List of expressions is empty')]).apply(null, [m_nil])]).apply(null, [m_global_45env]);
          }]).apply(null, [function (m__95) {
            return m_symbol_45expr_63.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [function (m__95) {
              return m_with.apply(null, [m_symbol_45expr_46name.apply(null, [m_car.apply(null, [m_exprs])])]).apply(null, [function (m_name) {
                return m_compose.apply(null, [m_list_46_61.apply(null, [m_char_46_61]).apply(null, [m_name])]).apply(null, [m_symbol_45_62list]).apply(null, [__to_m_symbol('fn')]).apply(null, [function (m__95) {
                  return m_generate_45fn_45expr.apply(null, [m_generate_45expr]).apply(null, [m_map.apply(null, [m_init.apply(null, [m_cdr.apply(null, [m_exprs])])]).apply(null, [m_symbol_45expr_46name])]).apply(null, [m_last.apply(null, [m_exprs])]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
                }]).apply(null, [function (m__95) {
                  return m_compose.apply(null, [m_list_46_61.apply(null, [m_char_46_61]).apply(null, [m_name])]).apply(null, [m_symbol_45_62list]).apply(null, [__to_m_symbol('def')]).apply(null, [function (m__95) {
                    return m_generate_45def_45expr.apply(null, [m_generate_45expr]).apply(null, [m_symbol_45expr_46name.apply(null, [m_cadr.apply(null, [m_exprs])])]).apply(null, [m_caddr.apply(null, [m_exprs])]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
                  }]).apply(null, [function (m__95) {
                    return m_compose.apply(null, [m_list_46_61.apply(null, [m_char_46_61]).apply(null, [m_name])]).apply(null, [m_symbol_45_62list]).apply(null, [__to_m_symbol('macro')]).apply(null, [function (m__95) {
                      return m_generate_45macro_45expr.apply(null, [m_generate_45expr]).apply(null, [m_symbol_45expr_46name.apply(null, [m_cadr.apply(null, [m_exprs])])]).apply(null, [m_caddr.apply(null, [m_exprs])]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
                    }]).apply(null, [function (m__95) {
                      return m_compose.apply(null, [m_list_46_61.apply(null, [m_char_46_61]).apply(null, [m_name])]).apply(null, [m_symbol_45_62list]).apply(null, [__to_m_symbol('symbol')]).apply(null, [function (m__95) {
                        return m_generate_45symbol_45literal_45expr.apply(null, [m_symbol_45expr_46name.apply(null, [m_cadr.apply(null, [m_exprs])])]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
                      }]).apply(null, [function (m__95) {
                        return m_generate_45macro_63_45expr.apply(null, [m_generate_45expr]).apply(null, [m_expr]).apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_cdr.apply(null, [m_exprs])]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
                      }]).apply(null, [m_nil]);
                    }]).apply(null, [m_nil]);
                  }]).apply(null, [m_nil]);
                }]).apply(null, [m_nil]);
              }]);
            }]).apply(null, [function (m__95) {
              return m_generate_45apply_45expr.apply(null, [m_generate_45expr]).apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_cdr.apply(null, [m_exprs])]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
            }]).apply(null, [m_nil]);
          }]).apply(null, [m_nil]);
        }]);
      };
    };
  };
};

exports.m_generate_45list_45expr = m_generate_45list_45expr;
var m_generate_45expr = m_fix.apply(null, [function (m_generate_45expr) {
  return function (m_expr) {
    return function (m_local_45env) {
      return function (m_global_45env) {
        return m_generate_45result_46match.apply(null, [m_symbol_45expr_63.apply(null, [m_expr]).apply(null, [function (m__95) {
          return m_generate_45symbol_45expr.apply(null, [m_symbol_45expr_46name.apply(null, [m_expr])]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
        }]).apply(null, [function (m__95) {
          return m_generate_45list_45expr.apply(null, [m_generate_45expr]).apply(null, [m_expr]).apply(null, [m_local_45env]).apply(null, [m_global_45env]);
        }]).apply(null, [m_nil])]).apply(null, [function (m_degenerate_39) {
          return m_degenerate_39;
        }]).apply(null, [function (m_generating_39) {
          return m_generating_39;
        }]).apply(null, [function (m_generated_39) {
          return m_generated.apply(null, [m_line_45number_45operation.apply(null, [m_generated_46operation.apply(null, [m_generated_39])]).apply(null, [m_position_46line.apply(null, [m_expr_46start.apply(null, [m_expr])])])]).apply(null, [m_generated_46declarations.apply(null, [m_generated_39])]).apply(null, [m_generated_46global_45env.apply(null, [m_generated_39])]);
        }]);
      };
    };
  };
}]);
exports.m_generate_45expr = m_generate_45expr;
var m_generate_45exprs_39 = m_fix.apply(null, [function (m_generate_45exprs_39) {
  return function (m_exprs) {
    return function (m_result) {
      return m_nil_63.apply(null, [m_exprs]).apply(null, [function (m__95) {
        return m_result;
      }]).apply(null, [function (m__95) {
        return m_with.apply(null, [m_generate_45result_46match.apply(null, [m_generate_45expr.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_default_45local_45env]).apply(null, [m_generate_45result_46global_45env.apply(null, [m_result])])]).apply(null, [function (m_degenerate_39) {
          return m_degenerate_39;
        }]).apply(null, [function (m_generating_39) {
          return m_generating_45_62generated.apply(null, [m_generating_39]).apply(null, [m_nil_45operation]).apply(null, [m_generate_45result_46global_45env.apply(null, [m_result])]).apply(null, [function (m_global_45env) {
            return m_generate_45expr.apply(null, [m_car.apply(null, [m_exprs])]).apply(null, [m_default_45local_45env]).apply(null, [m_global_45env]);
          }]);
        }]).apply(null, [function (m_generated_39) {
          return m_generated_39;
        }])]).apply(null, [function (m_car_45result) {
          return m_generate_45exprs_39.apply(null, [m_cdr.apply(null, [m_exprs])]).apply(null, [m_generate_45result_46combine.apply(null, [m_result]).apply(null, [m_car_45result]).apply(null, [m_generate_45result_46global_45env.apply(null, [m_car_45result])]).apply(null, [m_true])]);
        }]);
      }]).apply(null, [m_nil]);
    };
  };
}]);
exports.m_generate_45exprs_39 = m_generate_45exprs_39;

var m_generate_45exprs = function m_generate_45exprs(m_exprs) {
  return function (m_global_45env) {
    return m_generate_45exprs_39.apply(null, [m_exprs]).apply(null, [m_generated.apply(null, [m_nil_45operation]).apply(null, [m_nil]).apply(null, [m_global_45env])]);
  };
};

exports.m_generate_45exprs = m_generate_45exprs;
var m_resolve_45dependencies = m_fix.apply(null, [function (m_resolve_45dependencies) {
  return function (m_root) {
    return function (m_resolve) {
      return function (m_resolved) {
        return function (m_result) {
          return function (m_dependencies) {
            return function (m_resolved_63) {
              return m_with.apply(null, [m_get_45src.apply(null, [m_src_45root.apply(null, [m_root])])]).apply(null, [function (m_src_45of_45ref) {
                return m_with.apply(null, [m_get_45ref.apply(null, [m_ref_45root.apply(null, [m_root])])]).apply(null, [function (m_ref_45of_45sym) {
                  return m_nil_63.apply(null, [m_dependencies]).apply(null, [function (m__95) {
                    return m_with.apply(null, [m_resolved_63.apply(null, [function (m__95) {
                      return m_result;
                    }]).apply(null, [function (m__95) {
                      return m_degenerate.apply(null, [m_cons.apply(null, [__to_m_symbol('Could not resolve dependencies')]).apply(null, [m_nil])]).apply(null, [m_generate_45result_46global_45env.apply(null, [m_result])]);
                    }]).apply(null, [m_nil])]).apply(null, [function (m_result) {
                      return m_impure.apply(null, [m_pair.apply(null, [m_resolved]).apply(null, [m_result])]);
                    }]);
                  }]).apply(null, [function (m__95) {
                    return m_with.apply(null, [m_ref_45of_45sym.apply(null, [m_car.apply(null, [m_dependencies])])]).apply(null, [function (m_ref_45file) {
                      return m_then_45run_45with.apply(null, [m_file_46exists_63.apply(null, [m_ref_45file])]).apply(null, [function (m_is_45ref) {
                        return m_not.apply(null, [m_is_45ref]).apply(null, [function (m__95) {
                          return m_resolve_45dependencies.apply(null, [m_root]).apply(null, [m_resolve]).apply(null, [m_resolved]).apply(null, [m_result]).apply(null, [m_cdr.apply(null, [m_dependencies])]).apply(null, [m_resolved_63]);
                        }]).apply(null, [function (m__95) {
                          return m_then_45run_45with.apply(null, [m_file_46read.apply(null, [m_ref_45file])]).apply(null, [function (m_ref) {
                            return m_some_63.apply(null, [m_tree_45map_46get.apply(null, [m_resolved]).apply(null, [m_ref])]).apply(null, [function (m__95) {
                              return m_resolve_45dependencies.apply(null, [m_root]).apply(null, [m_resolve]).apply(null, [m_resolved]).apply(null, [m_result]).apply(null, [m_cdr.apply(null, [m_dependencies])]).apply(null, [m_true]);
                            }]).apply(null, [function (m__95) {
                              return m_then_45run_45with.apply(null, [m_parse_45file.apply(null, [m_src_45of_45ref.apply(null, [m_ref])])]).apply(null, [function (m_exprs) {
                                return m_then_45run_45with.apply(null, [m_resolve.apply(null, [m_tree_45map_46put.apply(null, [m_resolved]).apply(null, [m_ref]).apply(null, [m_true])]).apply(null, [m_generate_45exprs_39.apply(null, [m_exprs]).apply(null, [m_result])])]).apply(null, [function (m_pair) {
                                  return m_resolve_45dependencies.apply(null, [m_root]).apply(null, [m_resolve]).apply(null, [m_first.apply(null, [m_pair])]).apply(null, [m_second.apply(null, [m_pair])]).apply(null, [m_cdr.apply(null, [m_dependencies])]).apply(null, [m_true]);
                                }]);
                              }]);
                            }]).apply(null, [m_nil]);
                          }]);
                        }]).apply(null, [m_nil]);
                      }]);
                    }]);
                  }]).apply(null, [m_nil]);
                }]);
              }]);
            };
          };
        };
      };
    };
  };
}]);
exports.m_resolve_45dependencies = m_resolve_45dependencies;
var m_mpm_45resolve_45dependencies = m_resolve_45dependencies.apply(null, [m_mpm_45root]);
exports.m_mpm_45resolve_45dependencies = m_mpm_45resolve_45dependencies;

var m_mpm_45resolve_45generating = function m_mpm_45resolve_45generating(m_resolve) {
  return function (m_resolved) {
    return function (m_generating_39) {
      return m_then_45run_45with.apply(null, [m_mpm_45resolve_45dependencies.apply(null, [m_resolve]).apply(null, [m_resolved]).apply(null, [m_generating_39]).apply(null, [m_generating_46dependencies.apply(null, [m_generating_39])]).apply(null, [m_false])]).apply(null, [function (m_pair) {
        return m_resolve.apply(null, [m_first.apply(null, [m_pair])]).apply(null, [m_second.apply(null, [m_pair])]);
      }]);
    };
  };
};

exports.m_mpm_45resolve_45generating = m_mpm_45resolve_45generating;

var m_mpm_45resolve_45generated = function m_mpm_45resolve_45generated(m_resolve) {
  return function (m_resolved) {
    return function (m_generated_39) {
      return m_with.apply(null, [m_global_45env_46unresolved.apply(null, [m_generated_46global_45env.apply(null, [m_generated_39])])]).apply(null, [function (m_unresolved) {
        return m_nil_63.apply(null, [m_unresolved]).apply(null, [function (m__95) {
          return m_impure.apply(null, [m_pair.apply(null, [m_resolved]).apply(null, [m_generated_39])]);
        }]).apply(null, [function (m__95) {
          return m_then_45run_45with.apply(null, [m_mpm_45resolve_45dependencies.apply(null, [m_resolve]).apply(null, [m_resolved]).apply(null, [m_generated_39]).apply(null, [m_unresolved]).apply(null, [m_false])]).apply(null, [function (m_pair) {
            return m_resolve.apply(null, [m_first.apply(null, [m_pair])]).apply(null, [m_second.apply(null, [m_pair])]);
          }]);
        }]).apply(null, [m_nil]);
      }]);
    };
  };
};

exports.m_mpm_45resolve_45generated = m_mpm_45resolve_45generated;
var m_mpm_45resolve_45generate_45result_39 = m_fix.apply(null, [function (m_mpm_45resolve_45generate_45result_39) {
  return function (m_resolved) {
    return function (m_result) {
      return m_generate_45result_46match.apply(null, [m_result]).apply(null, [function (m_degenerate_39) {
        return m_impure.apply(null, [m_pair.apply(null, [m_resolved]).apply(null, [m_degenerate_39])]);
      }]).apply(null, [m_mpm_45resolve_45generating.apply(null, [m_mpm_45resolve_45generate_45result_39]).apply(null, [m_resolved])]).apply(null, [m_mpm_45resolve_45generated.apply(null, [m_mpm_45resolve_45generate_45result_39]).apply(null, [m_resolved])]);
    };
  };
}]);
exports.m_mpm_45resolve_45generate_45result_39 = m_mpm_45resolve_45generate_45result_39;

var m_mpm_45resolve_45generate_45result = function m_mpm_45resolve_45generate_45result(m_result) {
  return m_swap.apply(null, [m_run_45with]).apply(null, [m_second]).apply(null, [m_mpm_45resolve_45generate_45result_39.apply(null, [m_empty_45tree_45map.apply(null, [m_compare_45symbol])]).apply(null, [m_result])]);
};

exports.m_mpm_45resolve_45generate_45result = m_mpm_45resolve_45generate_45result;

var m_generate = function m_generate(m_exprs) {
  return m_mpm_45resolve_45generate_45result.apply(null, [m_generate_45exprs.apply(null, [m_exprs]).apply(null, [m_default_45global_45env])]);
};

exports.m_generate = m_generate;

var m_run_45mpm_45put = function m_run_45mpm_45put(m_args) {
  return m_with.apply(null, [m_file_46child.apply(null, [m_file_46local_45file]).apply(null, [m_car.apply(null, [m_args])])]).apply(null, [function (m_file) {
    return m_then_45run_45with.apply(null, [m_parse_45file.apply(null, [m_file])]).apply(null, [function (m_exprs) {
      return m_then_45run_45with.apply(null, [m_generate.apply(null, [m_exprs])]).apply(null, [function (m_result) {
        return m_then_45run.apply(null, [m_mpm_45put_45refs.apply(null, [m_generated_46declarations.apply(null, [m_result])])]).apply(null, [m_mpm_45put_45srcs.apply(null, [m_file])]);
      }]);
    }]);
  }]);
};

exports.m_run_45mpm_45put = m_run_45mpm_45put;

var m_run_45compile = function m_run_45compile(m_args) {
  return m_with.apply(null, [m_get_45backend.apply(null, [m_car.apply(null, [m_args])])]).apply(null, [function (m_backend) {
    return m_with.apply(null, [m_file_46child.apply(null, [m_file_46local_45file]).apply(null, [m_cadr.apply(null, [m_args])])]).apply(null, [function (m_in) {
      return m_with.apply(null, [m_file_46child.apply(null, [m_file_46local_45file]).apply(null, [m_caddr.apply(null, [m_args])])]).apply(null, [function (m_out) {
        return m_then_45run_45with.apply(null, [m_parse_45file.apply(null, [m_in])]).apply(null, [function (m_exprs) {
          return m_then_45run_45with.apply(null, [m_generate.apply(null, [m_exprs])]).apply(null, [function (m_result) {
            return m_write_45result.apply(null, [m_backend]).apply(null, [m_result]).apply(null, [m_out]);
          }]);
        }]);
      }]);
    }]);
  }]);
};

exports.m_run_45compile = m_run_45compile;
var m_repl = m_fix.apply(null, [function (m_repl) {
  return function (m_global_45env) {
    return function (m_heap) {
      return function (m_index) {
        return function (m_name) {
          return function (m_resolved) {
            return m_then_45run_45with.apply(null, [m_then_45run.apply(null, [m_ostream_46write.apply(null, [m_stdout]).apply(null, [m_car.apply(null, [__to_m_symbol('>')])])]).apply(null, [m_istream_46readln.apply(null, [m_stdin])])]).apply(null, [function (m_line) {
              return m_symbol_46_61.apply(null, [m_filter.apply(null, [m_line]).apply(null, [m_compose.apply(null, [m_not]).apply(null, [m_whitespace_63])])]).apply(null, [m_nil]).apply(null, [function (m__95) {
                return m_impure.apply(null, [m_nil]);
              }]).apply(null, [function (m__95) {
                return m_with.apply(null, [m_char_46_61.apply(null, [m_car.apply(null, [m_line])]).apply(null, [m_car.apply(null, [__to_m_symbol('!')])])]).apply(null, [function (m__33_63) {
                  return m_with.apply(null, [m_concat.apply(null, [__to_m_symbol('(def ')]).apply(null, [m_concat.apply(null, [m_append.apply(null, [m_name]).apply(null, [m_space])]).apply(null, [m_append.apply(null, [m__33_63.apply(null, [function (m__95) {
                    return m_cdr.apply(null, [m_line]);
                  }]).apply(null, [function (m__95) {
                    return m_line;
                  }]).apply(null, [m_nil])]).apply(null, [m_close_45parentheses])])])]).apply(null, [function (m_text) {
                    return m_with.apply(null, [m_repl_45parse.apply(null, [m_text]).apply(null, [m_index])]).apply(null, [function (m_expr) {
                      return m_then_45run_45with.apply(null, [m_mpm_45resolve_45generate_45result_39.apply(null, [m_resolved]).apply(null, [m_generate_45expr.apply(null, [m_expr]).apply(null, [m_default_45local_45env]).apply(null, [m_global_45env])])]).apply(null, [function (m_pair) {
                        return m_generate_45result_46match.apply(null, [m_second.apply(null, [m_pair])]).apply(null, [function (m_degenerate_39) {
                          return m_then_45run.apply(null, [m_ostream_46writeln.apply(null, [m_stdout]).apply(null, [m_car.apply(null, [m_degenerate_46errors.apply(null, [m_degenerate_39])])])]).apply(null, [m_repl.apply(null, [m_global_45env]).apply(null, [m_heap]).apply(null, [m_nat_46inc.apply(null, [m_index])]).apply(null, [m_resolved])]);
                        }]).apply(null, [function (m_generating_39) {
                          return m_then_45run.apply(null, [m_ostream_46writeln.apply(null, [m_stdout]).apply(null, [m_flat_45map.apply(null, [m_generating_46dependencies.apply(null, [m_generating_39])]).apply(null, [m_swap.apply(null, [m_append]).apply(null, [m_space])])])]).apply(null, [m_repl.apply(null, [m_global_45env]).apply(null, [m_heap]).apply(null, [m_nat_46inc.apply(null, [m_index])]).apply(null, [m_resolved])]);
                        }]).apply(null, [function (m_generated_39) {
                          return m_with.apply(null, [m_repl_45interpret_45declarations.apply(null, [m_generated_39]).apply(null, [m_heap])]).apply(null, [function (m_new_45heap) {
                            return m_with.apply(null, [m_repl_45interpret_45operation.apply(null, [m_generated_39]).apply(null, [m_new_45heap])]).apply(null, [function (m_value) {
                              return m__33_63.apply(null, [function (m__95) {
                                return m_then_45run_45with;
                              }]).apply(null, [function (m__95) {
                                return m_with;
                              }]).apply(null, [m_nil]).apply(null, [m_value]).apply(null, [function (m_v) {
                                return m_const.apply(null, [m_repl]).apply(null, [m_debug.apply(null, [m_v])]).apply(null, [m_generated_46global_45env.apply(null, [m_generated_39])]).apply(null, [m_new_45heap]).apply(null, [m_nat_46inc.apply(null, [m_index])]).apply(null, [m_cons.apply(null, [m_slash]).apply(null, [m_name])]).apply(null, [m_first.apply(null, [m_pair])]);
                              }]);
                            }]);
                          }]);
                        }]);
                      }]);
                    }]);
                  }]);
                }]);
              }]).apply(null, [m_nil]);
            }]);
          };
        };
      };
    };
  };
}]);
exports.m_repl = m_repl;

var m_run_45repl = function m_run_45repl(m_args) {
  return m_nil_63.apply(null, [m_args]).apply(null, [function (m__95) {
    return m_repl.apply(null, [m_default_45global_45env]).apply(null, [m_empty_45heap]).apply(null, [m_nat_46_49]).apply(null, [__to_m_symbol('_')]).apply(null, [m_empty_45tree_45map.apply(null, [m_compare_45symbol])]);
  }]).apply(null, [function (m__95) {
    return m_with.apply(null, [m_file_46child.apply(null, [m_file_46local_45file]).apply(null, [m_car.apply(null, [m_args])])]).apply(null, [function (m_file) {
      return m_then_45run_45with.apply(null, [m_parse_45file.apply(null, [m_file])]).apply(null, [function (m_exprs) {
        return m_then_45run_45with.apply(null, [m_generate.apply(null, [m_exprs])]).apply(null, [function (m_result) {
          return m_repl.apply(null, [m_generated_46global_45env.apply(null, [m_result])]).apply(null, [m_interpret_45declarations.apply(null, [m_generated_46declarations.apply(null, [m_result])]).apply(null, [m_empty_45heap])]).apply(null, [m_nat_46_49]).apply(null, [__to_m_symbol('_')]).apply(null, [m_empty_45tree_45map.apply(null, [m_compare_45symbol])]);
        }]);
      }]);
    }]);
  }]).apply(null, [m_nil]);
};

exports.m_run_45repl = m_run_45repl;

var m_ = function m_(m_args) {
  return m_with.apply(null, [m_car.apply(null, [m_args])]).apply(null, [function (m_mode) {
    return m_symbol_46_61.apply(null, [m_mode]).apply(null, [__to_m_symbol('repl')]).apply(null, [function (m__95) {
      return m_run_45repl.apply(null, [m_cdr.apply(null, [m_args])]);
    }]).apply(null, [function (m__95) {
      return m_symbol_46_61.apply(null, [m_mode]).apply(null, [__to_m_symbol('compile')]).apply(null, [function (m__95) {
        return m_run_45compile.apply(null, [m_cdr.apply(null, [m_args])]);
      }]).apply(null, [function (m__95) {
        return m_symbol_46_61.apply(null, [m_mode]).apply(null, [__to_m_symbol('mpm-put')]).apply(null, [function (m__95) {
          return m_run_45mpm_45put.apply(null, [m_cdr.apply(null, [m_args])]);
        }]).apply(null, [function (m__95) {
          return m_error.apply(null, [m_concat.apply(null, [__to_m_symbol('Could not find mode ')]).apply(null, [m_mode])]);
        }]).apply(null, [m_nil]);
      }]).apply(null, [m_nil]);
    }]).apply(null, [m_nil]);
  }]);
};

exports.m_ = m_;