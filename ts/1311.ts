type Sum<a,b> ={kind:'left',v:a}|{kind:'right', n:b}

type Option<a>=Sum<a,false>

type SlideToA<a> = { kind: 'left', v: a };
type SlideToB<b> = { kind: 'right', n: b };

const slideToA = <a>(value: a): SlideToA<a> => ({ kind: 'left', v: value });
const slideToB = <b>(value: b): SlideToB<b> => ({ kind: 'right', n: value });

const Some=<a>(v:a): Option<a> => ({kind: 'left', v: v})
const None=<a>(): Option<a> => ({kind: 'right', n: false})
