# from: https://codility.com/demo/results/trainingYVWH54-22V/
# score: 100% 

def solution(n)
  bg = 0
  max_bg = 0
  b = n.to_s(2)
  b.split('').each_with_index do |c,i|
    if c == '1'
      if bg > max_bg
        max_bg = bg
      end
      bg = 0
    else
      bg += 1
    end
  end
  return max_bg
end
