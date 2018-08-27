class Phrase
  def initialize(phrase)
  	@phrase = phrase.split(' ')
  end

  def word_count
  	result = Hash.new

  	@phrase.each do |word|
  	  if result[word] == nil
  	  	result[word] = 1
  	  else
  	  	result[word] = result[word] + 1
  	  end
  	end

  	result
  end
end