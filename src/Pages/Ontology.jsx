import React from "react";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ontograf1 from "../Images/ontograf1.jpg";




function Ontology() {
    return (
        <React.Fragment>
            <NavBar />
            <div>
                <h5 align='center'>Below Shows the image of the Ontology view Using protege </h5>
                <img
                    src={ontograf1}
                    width="80%"
                    height="80%"
                    alt="OntoGraf"
                />
            </div>
            <div>
                <AppBar position="static">
                    <Toolbar style={{ 'paddingLeft': "600px" }}>
                        Ontology Tree View
                    </Toolbar>
                </AppBar>
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                >
                    <TreeItem nodeId="1" label="Thing">
                        <TreeItem nodeId="2" label="Disease">
                            <TreeItem nodeId="3" label="Cancer">
                                <TreeItem nodeId="4" label="Organ System Cancer">
                                    <TreeItem nodeId="5" label="Thoracic Cancer">
                                        <TreeItem nodeId="6" label="Breast Cancer" />
                                    </TreeItem>
                                </TreeItem>
                            </TreeItem>
                        </TreeItem>
                        <TreeItem nodeId="7" label=" Patient">
                            <TreeItem nodeId="8" label="Diagnosis">
                                <TreeItem nodeId="9" label="Adiponectin" />
                                <TreeItem nodeId="10" label="BMI" />
                                <TreeItem nodeId="11" label="Classification" />
                                <TreeItem nodeId="12" label="Glucose" />
                                <TreeItem nodeId="13" label="HOMA" />
                                <TreeItem nodeId="14" label="Leptin" />
                                <TreeItem nodeId="15" label="MCP-1" />
                                <TreeItem nodeId="16" label="Resistin" />
                            </TreeItem>
                            <TreeItem nodeId="17" label="Pateint Id" />
                        </TreeItem>
                    </TreeItem>
                </TreeView>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Ontology;
