#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <queue>
#include <map>
#include <unordered_map>
#include <set>
#include <numeric>
#include <limits>
#include <tuple>
#include <array>
#include <stack>
#include <deque>
#include <cstdint>
#include <cmath>
#include <functional>
#include <iomanip>
#include <sstream>
using namespace std;
using ll = long long;

int main(){
    int n;ll k;cin>>n>>k;vector<ll>a(n);ll hi=0;
    for(ll &x:a){cin>>x;hi=max(hi,x);}
    auto ok=[&](ll len){ll cnt=0;for(ll x:a){cnt+=x/len;if(cnt>=k)return true;}return false;};
    ll lo=0;
    while(lo<hi){ll mid=lo+(hi-lo+1)/2;if(ok(mid))lo=mid;else hi=mid-1;}
    cout<<lo<<'\n';
}
