$(document).ready(function () {
    
    let likeStatus = {};
    let likeCounts = {
        course1: 35,
        course2: 47,
        course3: 56,
    };

  
    $('.like-button').click(function () {
        const courseId = $(this).data('course');

        
        if (typeof likeStatus[courseId] === 'undefined') {
            likeStatus[courseId] = false;
        }

       
        likeStatus[courseId] = !likeStatus[courseId];
        likeCounts[courseId] = likeStatus[courseId] ? likeCounts[courseId] + 1 : likeCounts[courseId] - 1;

      
        updateLikeCount(courseId);
    });

  
    function updateLikeCount(courseId) {
        const likeCountElement = $(`#likeCount_${courseId}`);
        if (likeCountElement.length) {
            likeCountElement.text(likeCounts[courseId]);
        }
    }

   
    Object.keys(likeCounts).forEach(function (courseId) {
        updateLikeCount(courseId);
    });
});