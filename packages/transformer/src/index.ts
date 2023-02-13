import * as ts from "typescript"

export function before(_: any, program: ts.Program): ts.TransformerFactory<ts.SourceFile> {
	return context => sourceFile => {
		const $ = ts.factory
		return $.updateSourceFile(
			sourceFile,
			[
				$.createExpressionStatement(
					$.createCallExpression(
						$.createPropertyAccessExpression(
							$.createIdentifier("console"),
							$.createIdentifier("log")
						),
						undefined,
						[
							$.createStringLiteral("Hello, world!")
						]
					)
				),
				...sourceFile.statements
			]
		)
	}
}
