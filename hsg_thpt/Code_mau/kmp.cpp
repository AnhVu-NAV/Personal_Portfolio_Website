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
    string t,p;cin>>t>>p;int m=p.size();vector<int>pi(m);
    for(int i=1;i<m;i++){int j=pi[i-1];while(j>0&&p[i]!=p[j])j=pi[j-1];
        if(p[i]==p[j])j++;pi[i]=j;}
    int j=0,ans=0;
    for(char c:t){while(j>0&&c!=p[j])j=pi[j-1];if(c==p[j])j++;
        if(j==m){ans++;j=pi[j-1];}}
    cout<<ans<<'\n';
}
