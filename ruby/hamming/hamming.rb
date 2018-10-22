class Hamming
	def self.compute(first, second)
		raise ArgumentError if first.length != second.length

		first_arr = first.chars
		second_arr = second.chars

		(0..first.length - 1).count { |i| first_arr[i] != second_arr[i] }
	end
end