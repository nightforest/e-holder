const loadMore = () => {    
    const loadMoreToggle = document.querySelector('.seo__toggle');
    const loadMoreText = document.querySelector('.seo__text');
    
    loadMoreToggle && loadMoreToggle.addEventListener('click', () => {
        loadMoreText.classList.toggle('is-visible');
        loadMoreText.style.maxHeight = loadMoreText.scrollHeight + 'px';
        loadMoreToggle.remove();
    });
}

export default loadMore;