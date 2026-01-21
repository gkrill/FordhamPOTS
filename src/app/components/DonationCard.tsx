import { useState } from 'react';
import { Heart, Pizza, CreditCard, Lock, CheckCircle, Smartphone, Wallet } from 'lucide-react';

interface DonationCardProps {
  pizzaSpotsLeft: number;
}

type PaymentMethod = 'card' | 'venmo' | 'cashapp' | 'paypal';

export function DonationCard({ pizzaSpotsLeft }: DonationCardProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [username, setUsername] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s/g, '');
    if (value.length <= 16) {
      value = value.replace(/(\d{4})/g, '$1 ').trim();
      setCardNumber(value);
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    if (value.length <= 5) {
      setExpiry(value);
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setName('');
        setEmail('');
        setQuantity(1);
        setPaymentMethod('venmo');
        setUsername('');
      }, 3000);
    }, 2000);
  };

  const getPizzaSpotMessage = () => {
    if (pizzaSpotsLeft === 0) {
      return 'Pizza party spots are full, but your donation still helps POTS!';
    } else if (quantity <= pizzaSpotsLeft) {
      return `You'll secure ${quantity === 1 ? 'your spot' : `${quantity} spots`} at the pizza party!`;
    } else {
      return `Only ${pizzaSpotsLeft} pizza party spot${pizzaSpotsLeft === 1 ? '' : 's'} available. You can still donate more to help POTS!`;
    }
  };

  if (showSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-green-500">
        <div className="p-12 text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Donation! 🎉
          </h3>
          <p className="text-xl text-gray-700 mb-2">
            ${quantity * 5} has been donated to POTS
          </p>
          {pizzaSpotsLeft > 0 && quantity > 0 && (
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 mt-6">
              <Pizza className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <p className="text-lg font-semibold text-gray-900">
                You've secured your spot at the pizza party! 🍕
              </p>
              <p className="text-gray-600 mt-2">
                Check your email for details.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-maroon-900 to-maroon-700 p-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="w-8 h-8" />
          <h3 className="text-3xl font-bold">Support POTS Today</h3>
        </div>
        <p className="text-white/90 text-lg">
          Make a difference with your $5 donation and join our pizza party!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 flex items-start gap-4">
          <Pizza className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-1">
              Pizza Party Invite - First Come First Serve!
            </h4>
            <p className="text-gray-700">
              {getPizzaSpotMessage()}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Only <span className="font-bold text-orange-600">{pizzaSpotsLeft} spots</span> remaining!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maroon-900 focus:outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maroon-900 focus:outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="quantity" className="block text-gray-700 font-semibold mb-2">
            Donation Amount
          </label>
          <select
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maroon-900 focus:outline-none transition-colors"
          >
            {[1, 2, 3, 4, 5, 10, 20].map((num) => (
              <option key={num} value={num}>
                ${num * 5} ({num} × $5 donation{num > 1 ? 's' : ''})
              </option>
            ))}
          </select>
        </div>

        {/* Payment Method Selection */}
        <div className="border-t-2 border-gray-200 pt-6">
          <div className="flex items-center gap-2 mb-4">
            <Lock className="w-5 h-5 text-green-600" />
            <h4 className="font-bold text-lg text-gray-900">Choose Payment Method</h4>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              type="button"
              onClick={() => setPaymentMethod('venmo')}
              className={`p-4 rounded-lg border-2 transition-all ${
                paymentMethod === 'venmo'
                  ? 'border-maroon-900 bg-maroon-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <Smartphone className={`w-8 h-8 mx-auto mb-2 ${
                paymentMethod === 'venmo' ? 'text-maroon-900' : 'text-gray-600'
              }`} />
              <div className="text-sm font-semibold text-gray-900">Venmo</div>
            </button>

            <button
              type="button"
              onClick={() => setPaymentMethod('cashapp')}
              className={`p-4 rounded-lg border-2 transition-all ${
                paymentMethod === 'cashapp'
                  ? 'border-maroon-900 bg-maroon-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <Wallet className={`w-8 h-8 mx-auto mb-2 ${
                paymentMethod === 'cashapp' ? 'text-maroon-900' : 'text-gray-600'
              }`} />
              <div className="text-sm font-semibold text-gray-900">Cash App</div>
            </button>
          </div>

          {/* Venmo Payment Fields */}
          {paymentMethod === 'venmo' && (
            <div className="space-y-4">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4 mb-4">
                <p className="text-sm text-blue-900">
                  <strong>Venmo:</strong> Send payment to <strong className="font-mono">@catrizz</strong>
                </p>
              </div>
              <div>
                <label htmlFor="venmoUsername" className="block text-gray-700 font-semibold mb-2">
                  Your Venmo Username *
                </label>
                <input
                  type="text"
                  id="venmoUsername"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maroon-900 focus:outline-none transition-colors"
                  placeholder="@yourusername"
                />
              </div>
            </div>
          )}

          {/* Cash App Payment Fields */}
          {paymentMethod === 'cashapp' && (
            <div className="space-y-4">
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4 mb-4">
                <p className="text-sm text-green-900">
                  <strong>Cash App:</strong> Send payment to <strong className="font-mono">$CatherineRisley5</strong>
                </p>
              </div>
              <div>
                <label htmlFor="cashappUsername" className="block text-gray-700 font-semibold mb-2">
                  Your Cash App Username *
                </label>
                <input
                  type="text"
                  id="cashappUsername"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maroon-900 focus:outline-none transition-colors"
                  placeholder="$yourusername"
                />
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">Total Donation:</span>
            <span className="text-3xl font-bold text-maroon-900">${quantity * 5}</span>
          </div>
          {pizzaSpotsLeft > 0 && quantity > 0 && (
            <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
              <span>Pizza Party Spots:</span>
              <span className="font-semibold text-orange-600">
                {Math.min(quantity, pizzaSpotsLeft)} secured
              </span>
            </div>
          )}
          <div className="mt-4 pt-4 border-t border-gray-300">
            <p className="text-sm text-gray-600 text-center">
              100% of your ${quantity * 5} goes directly to POTS
            </p>
          </div>
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-maroon-900 hover:bg-maroon-800 disabled:bg-gray-400 text-white py-4 px-6 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-3 shadow-lg"
        >
          {isProcessing ? (
            <>
              <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </>
          ) : (
            <>
              {paymentMethod === 'venmo' && <Smartphone className="w-6 h-6" />}
              {paymentMethod === 'cashapp' && <Wallet className="w-6 h-6" />}
              Donate ${quantity * 5} via {paymentMethod === 'venmo' ? 'Venmo' : 'Cash App'}
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Lock className="w-4 h-4 text-green-600" />
          <p>Secure payment processing</p>
        </div>

        <p className="text-xs text-gray-500 text-center">
          This is a demo payment form. In production, payments would be processed through secure payment gateways.
        </p>
      </form>
    </div>
  );
}