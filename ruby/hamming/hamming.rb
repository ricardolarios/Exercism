class Hamming
	def self.compute(first, second)
		raise ArgumentError if first.length != second.length

		length = first.length 
		i = 0
		result = 0

		while i < length
			result = result + 1 if first[i] != second[i]
			i = i + 1
		end

		result
	end
end