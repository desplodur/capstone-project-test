import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledQuestionComponent = styled.section`
	position: relative;
	width: 90vw;
	margin: 0.5em 0 0.5em 0;
	border: 2px solid var(--dark);
	border-radius: ${pxToRem(8)};
	background-color: var(--blue);
	color: var(--light);

	img#statusIndicator {
		position: absolute;
		top: 5px;
		right: 5px;
	}

	button#smallEditButton {
		position: absolute;
		top: 10px;
		right: 10px;
	}

	button#changeStatus {
		position: absolute;
		top: 50px;
		right: 10px;
	}
`;

export default StyledQuestionComponent;