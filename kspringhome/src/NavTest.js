import React from 'react';
import ScrollNavigation from 'react-single-page-navigation';
//import ConTest from './ConTest';
import A from './Cont/A';
import B from './Cont/B';
import C from './Cont/C';
import D from './Cont/D';
export const elements = {
  EL1: {},
  EL2: {},
  EL3: {},
  EL4: {}
};
const styles: {
  [key: string]: React.CSSProperties;
} = {
  menu: {
    position: "fixed",
    top: 0,
    width: "100%",
    height:"50px",
    background: "#BEE9E8"
  },
  menuLink: {
    width:"25%",
    float:"left",
    cursor: "pointer",
    transition: "all .2s ease-out"
  },
  menuLinkActive: {
    width:"25%",
    float:"left",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all .2s ease-out"
  },
  content: {
    width: "100%"
  },
  section: {
    width: "100%",
    height: "70vh"
  }
};
const NavTest = () => {
  return (    
            <ScrollNavigation elements={elements}>
              {({ refs, activeElement, goTo }) => (
                <div style={styles.container}>
                    <div style={styles.menu}>
                      <div
                        style={
                          activeElement === "EL1"
                            ? styles.menuLinkActive
                            : styles.menuLink
                        }
                        onClick={() => goTo("EL1")}
                      >
                        ONE
                      </div>
                      <div
                        style={
                          activeElement === "EL2"
                            ? styles.menuLinkActive
                            : styles.menuLink
                        }
                        onClick={() => goTo("EL2")}
                      >
                        TWO
                      </div>
                      <div
                        style={
                          activeElement === "EL3"
                            ? styles.menuLinkActive
                            : styles.menuLink
                        }
                        onClick={() => goTo("EL3")}
                      >
                        THREE
                      </div>
                      <div
                        style={
                          activeElement === "EL4"
                            ? styles.menuLinkActive
                            : styles.menuLink
                        }
                        onClick={() => goTo("EL4")}
                      >
                        FOUR
                      </div>
                    </div>
                  <div style={styles.content}>
                    {/* <ConTest /> */}
                    {/* <A
                      ref={refs.EL1}
                      style={{ width: "100%",
                      height: "1000px", background: "#62B6CB" }}
                    />
                    <B
                      ref={refs.EL2}
                      style={{ width: "100%",
                      height: "1000px", background: "#1B4965" }}
                    />
                    <C
                      ref={refs.EL3}
                      style={{width: "100%",
                      height: "1000px", background: "#62B6CB" }}
                    />
                    <D
                      ref={refs.EL4}
                      style={{ width: "100%",
                      height: "1000px", background: "#1B4965" }}
                    /> */}
                    <A ref={}></A>
                    {/* <div
                      ref={refs.EL1}
                      style={{ width: "100%",
                      height: "1000px", background: "#62B6CB" }}
                    /> */}
                    <div
                      ref={refs.EL2}
                      style={{ width: "100%",
                      height: "1000px", background: "#1B4965" }}
                    />
                    <div
                      ref={refs.EL3}
                      style={{width: "100%",
                      height: "1000px", background: "#62B6CB" }}
                    />
                    <div
                      ref={refs.EL4}
                      style={{ width: "100%",
                      height: "1000px", background: "#1B4965" }}
                    />
                  </div>
                </div>
              )}
            </ScrollNavigation>
          
  );
}

export default NavTest;
