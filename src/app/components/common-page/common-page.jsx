// import React from 'react';
// import { Box, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { ArrowBack } from '@mui/icons-material';
// import { CommonPageContainer, CommonPageHeader } from './common-page.styled';

// export default function CommonPage({
//   children,
//   actionElement,
//   title,
//   withBack,
//   ...boxProps
// }) {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (typeof actionElement.props.onClick === 'function') {
//       actionElement.props.onClick(e);
//     }
//   };

//   return (
//     <Box {...boxProps}>
//       <div>
//         <h2>{title}</h2>
//       </div>
//       <CommonPageContainer>
//         <CommonPageHeader>
//           <Box>
//             {withBack && (
//               <Button
//                 startIcon={<ArrowBack />}
//                 type="button"
//                 variant="outlined"
//                 onClick={() => navigate(-1)}
//               >
//                 Back
//               </Button>
//             )}
//           </Box>
//           <Box component="form" onSubmit={handleSubmit}>
//             {React.cloneElement(actionElement, { type: 'submit' })}
//           </Box>
//         </CommonPageHeader>
//         {children}
//       </CommonPageContainer>
//     </Box>
//   );
// }


// import React from 'react';
// import { Box, IconButton, Typography } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import PropTypes from 'prop-types';

// const CommonPage = ({ withBack, title, actionElement, children, onSubmit }) => {
//   return (
//     <Box>
//       {withBack && (
//         <IconButton
//           onClick={() => window.history.back()}
//           // sx={{ position: 'absolute', top: '16px', left: '16px' }}
//         >
//           <ArrowBackIcon />
//         </IconButton>
//       )}
//       <Typography variant="h5" >
//         {title}
//       </Typography>
//       {children}
//       {actionElement && (
//         <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
//           {React.cloneElement(actionElement, { onClick: onSubmit })}
//         </Box>
//       )}
//     </Box>
//   );
// };

// CommonPage.propTypes = {
//   withBack: PropTypes.bool,
//   title: PropTypes.string.isRequired,
//   actionElement: PropTypes.element,
//   children: PropTypes.node,
//   onSubmit: PropTypes.func,
// };

// export default CommonPage;

// sx={{ textAlign: 'center', my: 2 }}


import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { CommonPageContainer, CommonPageHeader } from './common-page.styled';

export default function CommonPage({
  children,
  actionElement,
  title,
  withBack,
  ...boxProps
}) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (actionElement && typeof actionElement.props.onClick === 'function') {
      actionElement.props.onClick(e);
    }
  };

  return (
    <Box {...boxProps}>
      <div>
        <h2>{title}</h2>
      </div>
      <CommonPageContainer>
        <CommonPageHeader>
          <Box>
            {withBack && (
              <Button
                startIcon={<ArrowBack />}
                type="button"
                variant="outlined"
                onClick={handleBack}
              >
                Back
              </Button>
            )}
          </Box>
          <Box component="form" onSubmit={handleSubmit}>
            {actionElement && React.cloneElement(actionElement, { type: 'submit' })}
          </Box>
        </CommonPageHeader>
        {children}
      </CommonPageContainer>
    </Box>
  );
}
