const imgConferenceElem = document.querySelector('.imgConference');
const infoElem = document.querySelector('.info');

imgConferenceElem.addEventListener('click', () => {
	infoElem.innerHTML = `
This conference will be informative to those wanting to learn Python and machine learning algorithms.	
	` 
});