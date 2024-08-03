// The Interface Segregation Principle says that a class should not be forced to implement interfaces it doesn't use. Instead, it's better to have many small, specific interfaces rather than one large, general-purpose interface.


// example 1

// Imagine you're designing a media player system. 
// Instead of having one large interface for all media types, you can have smaller, more specific interfaces.


//wrong way to implement
class MediaPlayer {
    playAudio();
    playVideo();
    playPlaylist();
}

// specific interfaces for each fucntion
class AudioPlayer {
    playAudio();
}

class VideoPlayer {
    playVideo();
}

class PlaylistPlayer {
    playPlaylist();
}

class MP3Player implements AudioPlayer {
    playAudio() {
        console.log('Playing audio');
    }
}

class MP4Player implements VideoPlayer {
    playVideo() {
        console.log('Playing video');
    }
}

//media player 
class VLCPlayer implements AudioPlayer, VideoPlayer, PlaylistPlayer {
    playAudio() {
        console.log('Playing audio');
    }
    playVideo() {
        console.log('Playing video');
    }
    playPlaylist() {
        console.log('Playing playlist');
    }
}

const mp3Player = new MP3Player();
mp3Player.playAudio(); // Output: Playing audio

const mp4Player = new MP4Player();
mp4Player.playVideo(); // Output: Playing video

const vlcPlayer = new VLCPlayer();
vlcPlayer.playPlaylist(); // Output: Playing playlist



// example 2:
// let's understand with violation and non-violation code

// violating ISP
// Here, a single interface FoodDelivery is used for all functionalities, which forces classes to implement methods they might not need.
// Large interface (not recommended)
class FoodDelivery {
  placeOrder(orderDetails);
  trackOrder(orderId);
  cancelOrder(orderId);
}

// Class implementing the large interface
class Customer implements FoodDelivery {
  placeOrder(orderDetails) {
      console.log('Order placed:', orderDetails);
  }
  trackOrder(orderId) {
      console.log('Tracking order:', orderId);
  }
  cancelOrder(orderId) {
      console.log('Order cancelled:', orderId);
  }
}

// Class implementing the large interface
class Restaurant implements FoodDelivery {
  placeOrder(orderDetails) {
      console.log('Cannot place order');
  }
  trackOrder(orderId) {
      console.log('Cannot track order');
  }
  cancelOrder(orderId) {
      console.log('Cannot cancel order');
  }
}

 //correcting the code non-violation

// Here, we split the large interface into smaller, specific interfaces for placing orders, tracking orders, and canceling orders.


// Specific interfaces (recommended)
class OrderPlacement {
    placeOrder(orderDetails);
}

class OrderTracking {
    trackOrder(orderId);
}

class OrderCancellation {
    cancelOrder(orderId);
}

// Class implementing specific interfaces
class Customer implements OrderPlacement, OrderTracking, OrderCancellation {
    placeOrder(orderDetails) {
        console.log('Order placed:', orderDetails);
    }
    trackOrder(orderId) {
        console.log('Tracking order:', orderId);
    }
    cancelOrder(orderId) {
        console.log('Order cancelled:', orderId);
    }
}

// Class implementing specific interfaces
class Restaurant implements OrderTracking {
    trackOrder(orderId) {
        console.log('Tracking order:', orderId);
    }
}

// Using instances
const customer = new Customer();
customer.placeOrder({ item: 'Pizza', quantity: 2 }); // Output: Order placed: { item: 'Pizza', quantity: 2 }
customer.trackOrder(123); // Output: Tracking order: 123
customer.cancelOrder(123); // Output: Order cancelled: 123

const restaurant = new Restaurant();
restaurant.trackOrder(123); // Output: Tracking order: 123