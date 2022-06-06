const mutationObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        const newNodes = mutation.addedNodes;
        newNodes.forEach(node => {
            var skipButton = document.getElementsByClassName("watch-video--skip-content-button");
            if (skipButton.length > 0) {
                skipButton[0].click();
            }
        });
    });
});

mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
});