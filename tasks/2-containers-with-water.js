function mostWater(height){
    let max_area = 0;
    let a_point = 0;
    let b_point = height.length -1;

    while(a_point < b_point){
        if(height[a_point] < height[b_point]){
            max_area = Math.max(max_area, height[a_point] * (b_point - a_point));
            a_point++;
        } else {
            max_area = Math.max(max_area, height[b_point] * (b_point - a_point));
            b_point--;
        }
    }
    return max_area;
}