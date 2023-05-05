
import { useState } from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Font, } from "@react-pdf/renderer";
const montserrat = {
    normal: 'https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_cJD3gTD_u50.woff2',
    bold: 'https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gTD_u50.woff2',
    italics: 'https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459Wlhzg.ttf',
    bolditalics: 'https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459WlhzyjVx3pI.ttf',
};

Font.register({
    family: 'Montserrat',
    fonts: [
        { src: montserrat.normal, fontWeight: 400 },
        { src: montserrat.bold, fontWeight: 700 },
        { src: montserrat.italics, fontStyle: 'italic' },
        { src: montserrat.bolditalics, fontWeight: 700, fontStyle: 'italic' },
    ],
});
const styles = StyleSheet.create({
    headingContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        padding: "1rem",
    },
    heading: {
        fontSize: "2rem",
        fontWeight: "semibold",
        color: "#374151",
    },
    downloadButton: {
        backgroundColor: "#2563EB",
        color: "#fff",
        fontWeight: "bold",
        padding: "0.5rem 1rem",
        borderRadius: "0.25rem",
        cursor: "pointer",
    },
    listItem: {
        fontFamily: "Montserrat",
        fontSize: "1.2rem",
        lineHeight: "1.5",
        marginBottom: 10,
    },
});


const BlogPage = () => {
    const [pdfGenerated, setPdfGenerated] = useState(false);

    const handleDownload = () => {
        setPdfGenerated(true);
    };

    return (
        <>
            <div style={styles.headingContainer}>
                <h1 style={styles.heading}>The Blog</h1>
                <button style={styles.downloadButton} onClick={handleDownload}>
                    Download Now
                </button>
            </div>
            <div className="text-center mt-5">
                {pdfGenerated ? (
                    <PDFDownloadLink
                        document={
                            <Document >
                                <Page>
                                    <View>
                                        <Text>ALL Blogs Resources</Text>
                                        <Text class> 1.(https://www.altogic.com/blog/difference-between-controlled-and-uncontrolled-component#:~:text=In%20React%2C%20controlled%20components%20refer,manage%20their%20own%20state%20internally.)</Text>
                                        <Text>2.(https://blog.logrocket.com/validate-react-props-proptypes/)</Text>
                                        <Text >3.(https://stackoverflow.com/questions/12668880/difference-between-node-js-and-express-js)</Text>
                                        <Text >4.(https://www.freecodecamp.org/news/how-to-create-react-hooks/)</Text>

                                    </View>
                                </Page>
                            </Document>
                        }
                        fileName="blog-resource.pdf"
                    >
                        {({ blob, url, loading, error }) =>
                            loading ? "Loading document..." : <>
                                <button className="btn btn-primary">Confim Download</button>
                                <br />
                                <span className="font-bold">  Note : All Blog Resource</span>
                            </>

                        }

                    </PDFDownloadLink>
                ) : null}
            </div>
            <div className='container mx-auto mt-5'>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Differences between uncontrolled and controlled components.
                    </div>
                    <div className="collapse-content">
                        <p> <span className='font-semibold'>Uncontrolled components</span> traditional uncontrolled components in that they manage their own state internally. In the case of React, this means that the component uses a ref to access the value of the input or select element, and any changes to the value are handled by an event handler.</p>
                        <p><span className='font-semibold'>Controlled components</span> iare implemented using custom components that are fully controlled by the application. This means that the component's state is managed entirely by the application, and any changes to the component's value are handled by updating the component's state through its props.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How to validate React props using PropTypes?
                    </div>
                    <div className="collapse-content">
                        <p> When validate React application, you'll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly.Props are an important mechanism for passing the read-only attributes to React components. The props are usually required to use correctly in the component. If it is not used correctly, the components may not behave as expected. Hence, it is required to use props validation in improving react components.
                        </p>
                        <br />
                        <p>
                            Props validation is a tool that will help the developers to avoid future bugs and problems. It is a useful way to force the correct usage of your components. It makes your code more readable. React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props, although it is not necessary to define components with propTypes. However, if you use propTypes with your components, it helps you to avoid unexpected bugs.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Difference between nodejs and express js.
                    </div>
                    <div className="collapse-content">
                        <p> <span className='font-semibold' >Node.js</span> is a runtime environment for JavaScript that allows you to execute JavaScript code on the server-side. It provides an event-driven, non-blocking I/O model that makes it well-suited for building scalable, high-performance web applications. With Node.js, you can build server-side applications using JavaScript, including web servers, APIs, and command-line tools.</p>
                        <p> <span className='font-semibold' >Express.js</span> is a web framework built on top of Node.js that provides a higher-level set of abstractions for building web applications. It provides a number of features, such as routing, middleware, and templating, that make it easier to build web applications quickly and efficiently. With Express.js, you can build server-side web applications that handle HTTP requests and responses, define routing and middleware, and interact with databases and other resources.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is a custom hook, and why will you create a custom hook?
                    </div>
                    <div className="collapse-content">
                        <p><span className='font-semibold'>Custom Hook</span>  React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                        <p> The main reason to write a custom hook is for code reusability.
                            Reusability — we can use the same hook again and again, without the need to write it twice.
                            Clean Code — extracting all the component logic into a hook will provide a cleaner codebase.
                            Maintainability — easier to maintain.
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BlogPage;

