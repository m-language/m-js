import * as Arc from "arcsecond";

const mapParser = (parser, fn) =>
    Arc.pipeParsers([parser, Arc.mapTo(fn)]);

const trimOutputBy = (parser, n: number) =>
    mapParser(parser, (s: string) => s.substring(n, s.length - n));

export const symbolParser = Arc.choice([
    trimOutputBy(Arc.regex(/^""(?!"")*""/), 2),
    trimOutputBy(Arc.regex(/^"[^"]*"/), 1),
    Arc.regex(/^[^\(\);\s]+/)
]);

export const expressionParser = Arc.recursiveParser(() =>
    mapParser(
        Arc.sequenceOf([
            Arc.optionalWhitespace,
            Arc.choice([
                symbolParser,
                mapParser(
                    Arc.sequenceOf([
                        Arc.char("("),
                        Arc.optionalWhitespace,
                        Arc.many(expressionParser),
                        Arc.optionalWhitespace,
                        Arc.char(")")
                    ]),
                    ([,,exp,,]) => exp
                )
            ])
        ]),
        ([, v]) => v
    )
);

export const mParser = mapParser(Arc.sequenceOf([Arc.many(expressionParser), Arc.optionalWhitespace, Arc.endOfInput]), ([el,,]) => el);

export default function parse(input: string) {
    let result = Arc.parse(mParser)(input);
    if(result.isError) {
        throw new Error(result);
    }else{
        return result.result;
    }
}