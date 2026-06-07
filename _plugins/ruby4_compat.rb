# Liquid 4 calls Object#tainted?, which was removed in Ruby 4.
# Jekyll loads this local plugin before rendering templates.
unless Object.method_defined?(:tainted?)
  class Object
    def tainted?
      false
    end
  end
end
