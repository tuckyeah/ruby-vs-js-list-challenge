def any?(list, &block)
  list.any?(&block)
end

def none?(list, &block)
  list.none?(&block)
end

def one?(list, &block)
  list.one?(&block)
end

def all?(array, &block)
  array.all?(&block)
end
