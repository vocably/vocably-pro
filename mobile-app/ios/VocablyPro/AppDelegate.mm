#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTLinkingManager.h>
#import <RNShareMenu/ShareMenuManager.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
    // Common method to handle URL opening logic
    BOOL handledByRCTLinkingManager = [self handleOpenURL:url withOptions:options forManager:[RCTLinkingManager class]];
    
    if (!handledByRCTLinkingManager) {
        // If not handled by RCTLinkingManager, try ShareMenuManager
        [self handleOpenURL:url withOptions:options forManager:[ShareMenuManager class]];
    }

    // Return YES if either manager handled the URL, otherwise return NO
    return handledByRCTLinkingManager;
}

- (BOOL)handleOpenURL:(NSURL *)url withOptions:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options forManager:(Class)managerClass
{
    if ([managerClass respondsToSelector:@selector(application:openURL:options:)]) {
        return [managerClass application:[UIApplication sharedApplication] openURL:url options:options];
    }

    return NO;
}

// - (BOOL)application:(UIApplication *)application
//    openURL:(NSURL *)url
//    options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
// {
//   return [RCTLinkingManager application:application openURL:url options:options];
// }

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"VocablyPro";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

// - (BOOL)application:(UIApplication *)app
//         openURL:(NSURL *)url
//         options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
// {
//   return [ShareMenuManager application:app openURL:url options:options];
// }

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
