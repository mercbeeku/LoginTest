var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _React = React,
    useState = _React.useState;


export function Form() {
    var _React$createElement;

    var _useState = useState(''),
        _useState2 = _slicedToArray(_useState, 2),
        email = _useState2[0],
        setEmail = _useState2[1];

    var _useState3 = useState(''),
        _useState4 = _slicedToArray(_useState3, 2),
        pass = _useState4[0],
        setPass = _useState4[1];

    var _useState5 = useState(''),
        _useState6 = _slicedToArray(_useState5, 2),
        txt = _useState6[0],
        setTxt = _useState6[1];

    var _useState7 = useState(''),
        _useState8 = _slicedToArray(_useState7, 2),
        combo = _useState8[0],
        setCombo = _useState8[1];

    var login = function login() {
        console.log(email, pass);

        var req = new XMLHttpRequest();
        req.open('POST', 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBixBf8DBs_k0ttAPuh4_ksN7NpGFMYrxE');
        req.setRequestHeader('Content-Type', 'application/json');
        req.onload = function () {
            console.log('res', req.response);
        };
        req.send(JSON.stringify({ email: email, password: pass, returnSecureToken: true }));
    };

    return React.createElement(
        'div',
        { 'class': 'form-group' },
        React.createElement('input', { type: 'text', 'class': 'form-control', placeholder: 'Email', onChange: function onChange(e) {
                return setEmail(e.target.value);
            } }),
        React.createElement('input', (_React$createElement = { type: 'text', 'class': 'form-control' }, _defineProperty(_React$createElement, 'type', 'password'), _defineProperty(_React$createElement, 'placeholder', 'Password'), _defineProperty(_React$createElement, 'onChange', function onChange(e) {
            return setPass(e.target.value);
        }), _React$createElement)),
        React.createElement('input', { type: 'button', 'class': 'btn btn-lg btn-primary btn-block', onClick: login, value: '\u041D\u044D\u0432\u0442\u0440\u044D\u0445' })
    );
}