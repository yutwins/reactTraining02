export const StyledJsx = () => {
    return (
        <>
        <div className="container">
            <p className="title">- Styled Jsx -</p>
            <button className="btn">Fight!!</button>
        </div>
        <style jsx="true">{`
            .container {
                border: solid 2px #392eff;
                border-radius: 20px;
                padding: 8px;
                margin: 8px;
                display: flex;
                justify-content: space-around;
                align-items: center;
              }

              .title {
                font-size: 20px;
                margin: 0;
                color: #3d84a8;
              }
              
              .btn {
                background-color: #abedd8;
                border: none;
                padding: 8px;
            }
            .btn:hover {
                background-color: #46cdcf;
                color: #fff;
                cursor: pointer;
            }

            `}</style>
        </>
    );
};