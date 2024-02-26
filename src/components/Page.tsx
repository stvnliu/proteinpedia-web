import pages from "../data/pages.json";
import "./Page.css";
import {
	PageData,
	PageContentType,
	SectionContent,
	TextContent,
} from "../types/pages";

const Page = ({ pageKey }: { pageKey: "homepage" }): JSX.Element => {
	const scanSection = (section: SectionContent, depth: number) => {
		if (section.type == PageContentType.Text) {
			console.log("Triggering TextContent logic...");

			const texts: JSX.Element[] = [];
			(section.content as TextContent[]).forEach((textContent) => {
				console.log(<p>{textContent.content}</p>);

				texts.push(<p>{textContent.content}</p>);
			});
			return <>{texts}</>;
		} else if (section.type == PageContentType.Section) {
			console.log("Triggering SectionContent logic...");

			const elements: JSX.Element[] = [];
			section.content.forEach((section) => {
				if (section.type == PageContentType.Text) {
					elements.push(<p>{(section as TextContent).content}</p>);
				} else if (section.type == PageContentType.Section) {
					elements.push(
						scanSection(section as SectionContent, depth + 1)
					);
				}
			});
			return (
				<section>
					<p className={`heading heading-${depth}`}>
						{section.heading}
					</p>
					{elements}
				</section>
			);
		} else {
			throw new Error("pageType not defined!");
		}
	};
	const pageData = pages[pageKey] as PageData;
	const components: JSX.Element[] = [];
	pageData.content.forEach((content) => {
		if (content.type == PageContentType.Text) {
			components.push(<p>{(content as TextContent).content}</p>);
		} else if (content.type == PageContentType.Section) {
			components.push(scanSection(content as SectionContent, 0));
		}
	});
	return (
		<div className="page">
			<p className="page-title">{pageData.title}</p>
			{components}
			<hr></hr>
			<p className="footnote">{pageData.footnotes}</p>
			<pre>Copyright &copy; 2024-2025 Proteinpedia Foundation</pre>
		</div>
	);
};
export default Page;
