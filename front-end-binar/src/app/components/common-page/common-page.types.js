import React from 'react';

/**
 * @typedef {Object} ICommonPageProps
 * @property {React.ReactNode} [actionElement] - The action element.
 * @property {string} [title] - The title.
 * @property {boolean} [withBack] - Indicates whether to show the back button.
 */

/**
 * CommonPage component.
 * @param {ICommonPageProps} props - Component props.
 * @returns {React.ReactNode} The rendered component.
 */
function CommonPage(props) {
  const { children, actionElement, title, withBack, ...boxProps } = props;

  return (
    <div {...boxProps}>
      <div>
        <h2>{title}</h2>
      </div>
      <div className='back-btn'> 
        {withBack && (
          <button className="btn-back" style={{width: '5%', margin: '0rem 15rem 0rem', padding: '10px'}} onClick={() => window.history.back()}>Back</button>
        )}
      </div>
      <div>{actionElement}</div>
      <div>{children}</div>
    </div>
  );
}

export default CommonPage;
